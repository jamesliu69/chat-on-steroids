$repoRoot = Split-Path -Parent $PSScriptRoot
$previousNodeOptions = $env:NODE_OPTIONS
$exitCode = 1

Push-Location -LiteralPath $repoRoot
try {
  if (-not (Get-Command npm.cmd -ErrorAction SilentlyContinue)) {
    throw 'npm.cmd was not found in PATH.'
  }

  $env:NODE_OPTIONS = (@($previousNodeOptions, '--use-system-ca') | Where-Object { $_ }) -join ' '
  & npm.cmd run dist:x64
  $exitCode = $LASTEXITCODE
} finally {
  Pop-Location
  if ($null -eq $previousNodeOptions) {
    Remove-Item Env:NODE_OPTIONS -ErrorAction SilentlyContinue
  } else {
    $env:NODE_OPTIONS = $previousNodeOptions
  }
}

exit $exitCode
