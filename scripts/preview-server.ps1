param(
  [string]$Root = (Split-Path -Parent $PSScriptRoot),
  [int]$Port = 8843
)

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")

try {
  $listener.Start()
} catch {
  Write-Host "Could not start the server on port $Port."
  Write-Host "It's likely already in use (maybe this server is already running in another window)."
  Write-Host $_.Exception.Message
  exit 1
}

Write-Host "============================================================"
Write-Host " Serving $Root"
Write-Host " at http://localhost:$Port/"
Write-Host "============================================================"
Write-Host ""
Write-Host " Open this in your browser: http://localhost:$Port/index.html"
Write-Host " To stop the server, close this window."
Write-Host ""

$mime = @{
  ".html" = "text/html"; ".css" = "text/css"; ".js" = "application/javascript"
  ".jpg" = "image/jpeg"; ".jpeg" = "image/jpeg"; ".png" = "image/png"
  ".svg" = "image/svg+xml"; ".gif" = "image/gif"; ".ico" = "image/x-icon"
  ".woff" = "font/woff"; ".woff2" = "font/woff2"; ".json" = "application/json"
  ".mp4" = "video/mp4"; ".webm" = "video/webm"
}

while ($listener.IsListening) {
  try {
    $context = $listener.GetContext()
    $req = $context.Request
    $res = $context.Response
    $res.KeepAlive = $false
    $path = [System.Uri]::UnescapeDataString($req.Url.AbsolutePath)
    if ($path -eq "/") { $path = "/index.html" }
    $filePath = Join-Path $Root ($path.TrimStart("/"))
    if (Test-Path $filePath -PathType Leaf) {
      $ext = [System.IO.Path]::GetExtension($filePath)
      $contentType = $mime[$ext]
      if (-not $contentType) { $contentType = "application/octet-stream" }
      $bytes = [System.IO.File]::ReadAllBytes($filePath)
      $res.ContentType = $contentType
      $res.ContentLength64 = [long]$bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $res.StatusCode = 404
      $bytes = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $path")
      $res.ContentLength64 = [long]$bytes.Length
      $res.OutputStream.Write($bytes, 0, $bytes.Length)
    }
    $res.OutputStream.Flush()
    $res.Close()
  } catch {
    try { $context.Response.Close() } catch {}
  }
}
