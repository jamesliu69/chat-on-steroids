// Production renderer and link handler in isolated Electron; no live app data or browser actions.
const { app, BrowserWindow } = require('electron');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { fixtureConfigSource } = require('./fixtures/app-defaults.cjs');
const root = path.resolve(__dirname, '..');
const output = path.join(root, 'outputs/plugin-refresh-reminder');
app.setPath('userData', path.join(output, 'runtime'));

app.whenReady().then(async () => {
  const { createServer } = await import('vite');
  const fixture = `
    localStorage.setItem('cos.ui.language', 'en');
    localStorage.setItem('cos.plugins.refreshReminder.acknowledgedSchemas', JSON.stringify({core:'a',desktop:'a',plugins:'a'}));
    ${fixtureConfigSource()}
    const config = fixtureConfig({roots:[{name:'fixture',path:'C:/fixture'}],ui:{theme:'dark',autoConnect:false,lastSeenVersion:'2.1.34'}});
    const surfaces = ['core','desktop','plugins'].map(id => ({id,
      connectorName:'Chat On Steroids '+({core:'Core',desktop:'Desktop',plugins:'Plugins'})[id],
      chatgptName:id==='core'?'Renamed Core':null, description:'',cardSummary:'',optional:id!=='core',
      available:true,localUrl:null,publicUrl:null,tools:[],state:'off',detail:'',lastRequestAt:null,lastToolCallAt:null}));
    const state = {config,connectorSchemas:{core:'b',desktop:'b',plugins:'b'},confirmedConnectorSchemas:{desktop:'b'},
      hasApiKey:false,hasGoalKey:false,resolvedBinary:null,bundledTunnelVersion:null,
      platform:{family:'windows',desktopAutomation:true},
      status:{state:'disconnected',detail:'',publicUrl:null,localUrl:null,handshakeAt:null,lastRequestAt:null,lastToolCallAt:null,health:null,surfaces},
      bridge:{running:false,port:0,paired:false,present:false,lastSeenAt:null,extensionVersion:null},
      update:{current:'2.1.34',latest:null,stage:'idle',error:null,checkedAt:null}};
    const ok = data => Promise.resolve({ok:true,data:structuredClone(data)});
    let stateChanged;
    window.openedLinks = [];
    window.api = new Proxy({getState:()=>ok(state),getLog:()=>ok([]),listProjects:()=>ok([]),
      listSessions:()=>ok({sessions:[],total:0,nextCursor:null,activeId:null,pressure:[],blocked:[]}),
      getSwarm:()=>ok({running:false,runId:null,agents:[],maxWorkers:2,pendingReports:0}),
      getChatModels:()=>ok({state:'unknown',models:[]}),onStateChanged:listener=>{stateChanged=listener;},
      openLink:(url,options)=>{window.openedLinks.push({url,options});return ok(true);}
    },{get:(target,key)=>key in target?target[key]:()=>ok(null)});
    window.confirmSchemas = () => {state.confirmedConnectorSchemas={...state.connectorSchemas};stateChanged(structuredClone(state));};
    window.setTheme = theme => {state.config.ui.theme=theme;stateChanged(structuredClone(state));};
    await import('/main.ts');
    window.fixtureReady = true;
  `;
  const server = await createServer({configFile:false,root:path.join(root,'src/renderer'),
    server:{host:'127.0.0.1',port:0},plugins:[{name:'plugin-refresh-fixture',configureServer(vite) {
      vite.middlewares.use('/fixture.html',async (_request,response)=>{
        const entry = '<script type="module" src="./main.ts"></script>';
        const page = fs.readFileSync(path.join(root,'src/renderer/index.html'),'utf8');
        assert.ok(page.includes(entry));
        const html = page.replace(entry,'').replace('</body>','<script type="module">'+fixture+'</script></body>');
        response.setHeader('Content-Type','text/html');
        response.end(await vite.transformIndexHtml('/fixture.html',html));
      });
    }}]});
  let win;
  try {
    await server.listen();
    win = new BrowserWindow({show:false,width:960,height:900,webPreferences:{sandbox:true,backgroundThrottling:false}});
    await win.loadURL(server.resolvedUrls.local[0]+'fixture.html');
    const js = code => win.webContents.executeJavaScript(code);
    for (let i=0;i<200 && !(await js('!!window.fixtureReady'));i++) await new Promise(resolve=>setTimeout(resolve,25));
    assert.equal(await js('!!window.fixtureReady'),true);
    await js(`document.getElementById('newChat').click()`);
    assert.equal(await js(`document.getElementById('pluginRefreshReminder').hidden`),false);
    assert.equal(await js(`document.getElementById('pluginRefreshReminderTargets').textContent`),
      'In ChatGPT Plugins, select Renamed Core, Chat On Steroids Plugins, then choose Refresh tools.');
    const acknowledged = await js(`localStorage.getItem('cos.plugins.refreshReminder.acknowledgedSchemas')`);
    // Exercise main.ts's existing delegated handler, not a duplicate test handler.
    await js(`document.getElementById('openPluginRefreshReminder').click()`);
    assert.deepEqual(await js('window.openedLinks'),[{url:'https://chatgpt.com/settings/plugins-settings',options:undefined}]);
    assert.equal(await js(`localStorage.getItem('cos.plugins.refreshReminder.acknowledgedSchemas')`),acknowledged);
    assert.equal(await js(`document.getElementById('pluginRefreshReminder').hidden`),false);

    fs.mkdirSync(output,{recursive:true});
    const results = [];
    for (const [width,language,theme] of [[960,'en','dark'],[960,'zh-TW','dark'],[640,'zh-TW','light'],[640,'de','dark']]) {
      win.setContentSize(width,900);
      await js(`document.querySelector('[data-language="${language}"]').click();window.setTheme('${theme}')`);
      const result = await js(`(async () => {
        await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
        const notice=document.getElementById('pluginRefreshReminder'),button=document.getElementById('openPluginRefreshReminder');
        const n=notice.getBoundingClientRect(),b=button.getBoundingClientRect();
        return {visible:n.height>0,overflow:notice.scrollWidth>notice.clientWidth,framed:parseFloat(getComputedStyle(button).borderTopWidth)>0,
          buttonFits:b.left>=n.left && b.right<=n.right && b.top>=n.top && b.bottom<=n.bottom,
          label:button.textContent.trim(),instructions:document.getElementById('pluginRefreshReminderTargets').textContent};
      })()`);
      assert.equal(result.visible,true);
      assert.equal(result.overflow,false);
      assert.equal(result.buttonFits,true);
      assert.equal(result.framed,true);
      if (language==='zh-TW') {
        assert.equal(result.label,'開啟 ChatGPT 外掛');
        assert.equal(result.instructions,'在 ChatGPT「外掛程式」中選取 Renamed Core, Chat On Steroids Plugins，再按「重新整理工具」。');
      }
      fs.writeFileSync(path.join(output,`${width}-${language}-${theme}.png`),(await win.webContents.capturePage(undefined,{stayHidden:true,stayAwake:true})).toPNG());
      results.push({width,language,theme,...result});
    }
    await js(`document.querySelector('[data-tab="setup"]').click()`);
    assert.equal(await js(`getComputedStyle(document.getElementById('pluginRefreshReminder')).display`),'none');
    await js(`document.getElementById('newChat').click();window.confirmSchemas()`);
    assert.equal(await js(`document.getElementById('pluginRefreshReminder').hidden`),true);
    console.log(JSON.stringify({linkHandler:true,noFalseAcknowledgement:true,confirmedSchemasHideReminder:true,layouts:results}));
  } finally {
    win?.destroy();
    await server.close();
  }
  app.exit(0);
}).catch(error=>{console.error(error);app.exit(1);});
