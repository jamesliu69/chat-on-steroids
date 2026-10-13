// Compile the complete production C# against synthetic WinRT interfaces. No audio APIs exist
// in these interfaces. Startup uses the production PowerShell try/catch/owner/cleanup path.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');
const vm = require('node:vm');
const { execFileSync, spawn } = require('node:child_process');
if (process.platform !== 'win32') throw new Error('Windows PowerShell is required');
const source = fs.readFileSync(path.join(__dirname, '../../src/main/dictation.ts'), 'utf8');
const embedded = source.match(/const SCRIPT = (\[[\s\S]*?\])\.join\('\\r\\n'\)/);
assert(embedded, 'production script must be located');
const original = vm.runInNewContext(embedded[1], Object.create(null)).join('\r\n');
const native = original.match(/\$cosRecognizerSource = @'\r\n([\s\S]*?)\r\n'@/)[1];
const encode = script => Buffer.from(script, 'utf16le').toString('base64');
const args = script => ['-NoLogo', '-NoProfile', '-NonInteractive', '-EncodedCommand', encode(script)];
const stubs = `
#pragma warning disable 0067
namespace Windows.Foundation {
  public enum AsyncStatus { Started, Completed, Canceled, Error }
  public interface IAsyncInfo { AsyncStatus Status { get; } System.Exception ErrorCode { get; } void Cancel(); }
  public interface IAsyncAction : IAsyncInfo { void GetResults(); }
  public interface IAsyncOperation<T> : IAsyncInfo { T GetResults(); }
  public class FixtureAction : IAsyncAction {
    public string Stage; public AsyncStatus FixedStatus = AsyncStatus.Completed;
    public int NativeHResult = unchecked((int)0x80045509);
    public bool Pending; bool announced;
    public virtual AsyncStatus Status { get {
      if (Pending) return AsyncStatus.Started;
      var scenario = System.Environment.GetEnvironmentVariable("COS_FIXTURE_SCENARIO");
      if (scenario == Stage + "_timeout") return AsyncStatus.Started;
      if (scenario == Stage + "_pause" && !System.IO.File.Exists(System.Environment.GetEnvironmentVariable("COS_FIXTURE_RELEASE"))) {
        if (!announced) { announced = true; System.Console.WriteLine("fixture:paused:" + Stage); }
        return AsyncStatus.Started;
      }
      if (scenario == Stage + "_canceled") return AsyncStatus.Canceled;
      if (scenario == "fallback_pause" && Stage == "start") return AsyncStatus.Error;
      if (scenario == Stage + "_error" || scenario == Stage + "_denial") return AsyncStatus.Error;
      return FixedStatus;
    } }
    public System.Exception ErrorCode { get {
      var denial = System.Environment.GetEnvironmentVariable("COS_FIXTURE_SCENARIO") == Stage + "_denial";
      return new System.Runtime.InteropServices.COMException("fixture native error", denial ? unchecked((int)0x80070005) : NativeHResult);
    } }
    public void Cancel() { System.Console.WriteLine("fixture:op-cancel"); }
    public void GetResults() {
      if (Stage == "start" && System.Environment.GetEnvironmentVariable("COS_FIXTURE_SCENARIO") == "publish_pause") {
        System.Console.WriteLine("fixture:paused:publish");
        while (!System.IO.File.Exists(System.Environment.GetEnvironmentVariable("COS_FIXTURE_RELEASE"))) System.Threading.Thread.Sleep(10);
      }
      if (Stage == "cancel" && System.Environment.GetEnvironmentVariable("COS_FIXTURE_SCENARIO") == "fallback_pause") {
        System.Console.WriteLine("fixture:paused:fallback");
        while (!System.IO.File.Exists(System.Environment.GetEnvironmentVariable("COS_FIXTURE_RELEASE"))) System.Threading.Thread.Sleep(10);
      }
    }
  }
  public class FixtureOperation : FixtureAction, IAsyncOperation<Windows.Media.SpeechRecognition.SpeechRecognitionCompilationResult> {
    Windows.Media.SpeechRecognition.SpeechRecognitionCompilationResult IAsyncOperation<Windows.Media.SpeechRecognition.SpeechRecognitionCompilationResult>.GetResults() {
      return new Windows.Media.SpeechRecognition.SpeechRecognitionCompilationResult { Status = System.Environment.GetEnvironmentVariable("COS_FIXTURE_SCENARIO") == "unavailable" ? Windows.Media.SpeechRecognition.SpeechRecognitionResultStatus.Failure : Windows.Media.SpeechRecognition.SpeechRecognitionResultStatus.Success };
    }
  }
}
namespace Windows.Media.SpeechRecognition {
  public enum SpeechRecognitionResultStatus { Success, Failure }
  public enum SpeechRecognitionConfidence { Rejected, High }
  public class SpeechRecognitionCompilationResult { public SpeechRecognitionResultStatus Status; }
  public class SpeechRecognitionResult { public SpeechRecognitionResultStatus Status; public SpeechRecognitionConfidence Confidence; public string Text; }
  public class Hypothesis { public string Text; }
  public class HypothesisArgs : System.EventArgs { public Hypothesis Hypothesis = new Hypothesis(); }
  public class ResultArgs : System.EventArgs { public SpeechRecognitionResult Result = new SpeechRecognitionResult(); }
  public class CompletedArgs : System.EventArgs { public SpeechRecognitionResultStatus Status; }
  public class SpeechContinuousRecognitionSession {
    public System.TimeSpan AutoStopSilenceTimeout;
    public event System.EventHandler<ResultArgs> ResultGenerated;
    public event System.EventHandler<CompletedArgs> Completed;
    public Windows.Foundation.IAsyncAction StartAsync() { System.Console.WriteLine("fixture:start"); return new Windows.Foundation.FixtureAction { Stage = "start" }; }
    public Windows.Foundation.IAsyncAction StopAsync() { CosDictation.Ended = "Success"; return new Windows.Foundation.FixtureAction(); }
    public Windows.Foundation.IAsyncAction CancelAsync() { System.Console.WriteLine("fixture:session-cancel"); return new Windows.Foundation.FixtureAction { Stage = "cancel" }; }
  }
  public class SpeechRecognizer {
    public event System.EventHandler<HypothesisArgs> HypothesisGenerated;
    public SpeechContinuousRecognitionSession ContinuousRecognitionSession = new SpeechContinuousRecognitionSession();
    public Windows.Foundation.IAsyncOperation<SpeechRecognitionCompilationResult> CompileConstraintsAsync() { System.Console.WriteLine("fixture:compile"); return new Windows.Foundation.FixtureOperation { Stage = "compile" }; }
    public void Dispose() { System.Console.WriteLine("fixture:dispose"); }
  }
}
`;
function syntheticDefinitions() {
  // Using directives must precede namespace/type definitions when CodeDom compiles.
  return native.replace('public static class CosDictation {', stubs + '\npublic static class CosDictation {');
}
function waits() {
  const probe = `
public static class WaitProbe {
  public static string Run(bool generic, Windows.Foundation.AsyncStatus status) {
    var op = new Windows.Foundation.FixtureOperation { FixedStatus = status, Pending = status == Windows.Foundation.AsyncStatus.Started };
    foreach (var method in typeof(CosDictation).GetMethods(System.Reflection.BindingFlags.NonPublic | System.Reflection.BindingFlags.Static)) {
      if (method.Name != "Await" || method.IsGenericMethod != generic) continue;
      var selected = generic ? method.MakeGenericMethod(typeof(Windows.Media.SpeechRecognition.SpeechRecognitionCompilationResult)) : method;
      var parameters = selected.GetParameters(); var values = new object[parameters.Length]; values[0] = op;
      for (int i = 1; i < values.Length; i++) values[i] = parameters[i].ParameterType == typeof(int) ? (object)0 : null;
      // Old generic wait has no deadline: end its pending operation after 100 ms to avoid a hung test.
      if (generic && parameters.Length == 1 && op.Pending) new System.Threading.Thread(() => { System.Threading.Thread.Sleep(100); op.Pending = false; op.FixedStatus = Windows.Foundation.AsyncStatus.Canceled; }).Start();
      try { selected.Invoke(null, values); return "Completed"; }
      catch (System.Reflection.TargetInvocationException e) { return e.InnerException.GetType().Name + ":" + e.InnerException.HResult.ToString("x8"); }
    }
    throw new System.Exception("Production Await method missing");
  }
}`;
  const ps = `$ErrorActionPreference='Stop'\r\nAdd-Type -WarningAction SilentlyContinue -TypeDefinition @'\r\n${syntheticDefinitions()}\n${probe}\r\n'@\r\n` +
    `$rows = foreach($generic in $false,$true) { foreach($status in [Enum]::GetValues([Windows.Foundation.AsyncStatus])) { [pscustomobject]@{generic=$generic;status=$status.ToString();result=[WaitProbe]::Run($generic,$status)} } }; $rows | ConvertTo-Json -Compress`;
  const output = execFileSync('powershell.exe', args(ps), { windowsHide: true, encoding: 'utf8', timeout: 25_000 });
  const rows = JSON.parse(output.trim().split(/\r?\n/).at(-1));
  for (const row of rows) {
    const expected = { Started: 'TimeoutException:', Completed: 'Completed', Canceled: 'OperationCanceledException:', Error: 'COMException:80045509' }[row.status];
    assert(row.result.startsWith(expected), `${row.generic ? 'compile' : 'start'} ${row.status}: expected ${expected}, got ${row.result}`);
  }
  console.log('PASS: 8 actual C# wait outcomes (compile/start × pending/completed/canceled/native error), no audio');
}
function startupScript(parentPid, stopFile) {
  let script = original.replace(native, syntheticDefinitions());
  script = script.replace(/function CompileRecognizer \{[\s\S]*?\r\n\}/,
    "function CompileRecognizer { Add-Type -WarningAction SilentlyContinue -TypeDefinition $cosRecognizerSource }");
  // Replace only legacy microphone construction, retaining production guards around it.
  script = script.replace(/    Add-Type -AssemblyName System.Speech[\s\S]*?    Send 'status' 'listening' 'legacy'/,
    "    [Console]::Out.WriteLine('fixture:fallback')\r\n    $engine = 'fixture'\r\n    Send 'status' 'listening' 'legacy'");
  script = script.replace('__COS_PARENT_PID__', String(parentPid)).replace('__COS_STOP_FILE__', () => stopFile.replaceAll("'", "''"));
  assert(!script.includes('Add-Type -AssemblyName System.Speech') && !script.includes('SetInputToDefaultAudioDevice') && !script.includes('__COS_'), 'startup fixture must contain no native microphone access');
  return script;
}
async function startupCase(scenario, revoke, expectedEngine) {
  startupScript(process.pid, 'fixture-safety-check.stop');
  const parent = spawn(process.execPath, ['-e', 'setTimeout(() => {}, 120000)'], { windowsHide: true, stdio: 'ignore' });
  assert(parent.pid);
  const base = path.join(os.tmpdir(), `cos-startup-${process.pid}-${scenario}-${revoke || 'normal'}`);
  const stopFile = base + '.stop', release = base + '.release', scriptFile = base + '.ps1';
  for (const file of [stopFile, release]) fs.rmSync(file, { force: true });
  fs.writeFileSync(scriptFile, '\uFEFF' + startupScript(parent.pid, stopFile), 'utf8');
  const child = spawn('powershell.exe', args('& ([scriptblock]::Create([System.IO.File]::ReadAllText($env:COS_FIXTURE_SCRIPT)))'), {
    windowsHide: true, stdio: ['ignore', 'pipe', 'pipe'],
    env: { ...process.env, COS_FIXTURE_SCENARIO: scenario, COS_FIXTURE_RELEASE: release, COS_FIXTURE_SCRIPT: scriptFile }
  });
  const lines = []; let buffer = '', stderr = '', acted = false;
  try {
    await new Promise((resolve, reject) => {
      const timer = setTimeout(() => { child.kill(); reject(new Error(`${scenario}/${revoke}: startup did not exit`)); }, scenario.endsWith('_timeout') ? 25_000 : 8000);
      child.stdout.setEncoding('utf8'); child.stderr.setEncoding('utf8');
      child.stderr.on('data', data => { stderr += data; });
      child.stdout.on('data', data => {
        buffer += data; let newline;
        while ((newline = buffer.indexOf('\n')) >= 0) {
          const line = buffer.slice(0, newline).trim(); buffer = buffer.slice(newline + 1); lines.push(line);
          if (revoke && line === 'fixture:paused:' + scenario.replace('_pause', '') && !acted) {
            acted = true;
            if (revoke.startsWith('stop')) fs.writeFileSync(stopFile, '');
            else parent.kill();
            // Resume after revoking authority. No resumed native startup may publish listening/fallback.
            if (!revoke.endsWith('_held')) {
              if (revoke === 'stop') fs.writeFileSync(release, '');
              else parent.once('exit', () => fs.writeFileSync(release, ''));
            }
          }
          if (line.includes('"status":"listening"')) fs.writeFileSync(stopFile, '');
        }
      });
      child.once('error', error => { clearTimeout(timer); reject(error); });
      child.once('exit', (code, signal) => { clearTimeout(timer); code === 0 && !signal ? resolve() : reject(new Error(`${scenario}: ${code}/${signal}: ${stderr}`)); });
    });
    const events = lines.filter(line => line.startsWith('{')).map(line => JSON.parse(line));
    const listening = events.filter(event => event.status === 'listening');
    assert.deepEqual(listening.map(event => event.engine), expectedEngine ? [expectedEngine] : [], `${scenario}/${revoke}: listening must reflect completed, authorized startup; ${lines.join('|')}`);
    assert.equal(lines.includes('fixture:fallback'), expectedEngine === 'legacy', `${scenario}/${revoke}: fallback authority; ${lines.join('|')}`);
    assert(events.some(event => event.status === 'stopped'), 'cleanup reports stopped');
    if (revoke) assert(acted, 'startup must actually be paused before authority is revoked');
    if (scenario.endsWith('_canceled') || scenario.endsWith('_pause') || expectedEngine === 'legacy' || scenario.endsWith('_denial')) {
      assert(lines.includes('fixture:dispose'), `partial modern setup must dispose: ${lines.join('|')}`);
      if (scenario.startsWith('start_') || scenario === 'publish_pause' || scenario === 'fallback_pause') assert(lines.includes('fixture:session-cancel'), `partial session must cancel: ${lines.join('|')}`);
      if (expectedEngine === 'legacy') assert(lines.indexOf('fixture:dispose') < lines.indexOf('fixture:fallback'), 'modern disposal precedes fallback');
    }
    if (scenario.endsWith('_denial')) assert(events.some(event => event.type === 'error' && event.message.includes('Windows blocks microphone access')), 'native permission HResult must keep the denial path');
    console.log(`PASS: actual startup ${scenario}/${revoke || 'authorized'} -> ${expectedEngine || 'stopped'}, no audio`);
  } finally {
    parent.kill(); child.kill();
    for (const file of [stopFile, release, scriptFile]) fs.rmSync(file, { force: true });
  }
}
async function main() {
  if (process.argv[2] === 'waits') return waits();
  assert.equal(process.argv[2], 'startup');
  for (const stage of ['compile', 'start']) {
    for (const revoke of ['stop', 'parent']) await startupCase(stage + '_pause', revoke, null);
    // A wait must notice revocation while its operation is still pending, without a resume.
    for (const revoke of ['stop_held', 'parent_held']) await startupCase(stage + '_pause', revoke, null);
    await startupCase(stage + '_canceled', null, null);
  }
  for (const revoke of ['stop', 'parent']) await startupCase('publish_pause', revoke, null);
  for (const revoke of ['stop', 'parent']) await startupCase('fallback_pause', revoke, null);
  await startupCase('completed', null, 'modern');
  await startupCase('unavailable', null, 'legacy');
  await startupCase('start_error', null, 'legacy');
  await startupCase('compile_timeout', null, 'legacy');
  await startupCase('start_timeout', null, 'legacy');
  await startupCase('start_denial', null, null);
}
main().catch(error => { console.error(error); process.exitCode = 1; });
