@echo off
setlocal

set "ROOT=%~dp0"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"
set "PORT=8843"

echo ============================================================
echo  RTM-AKTU local preview server
echo ============================================================
echo.
echo  Starting a local server for this folder on port %PORT% ...
echo.
echo  Once it says "Serving ... at http://localhost:%PORT%/",
echo  open this address in your browser:
echo.
echo      http://localhost:%PORT%/index.html
echo.
echo  Tip: bookmark that address so you don't have to type it again.
echo  To stop the server, just close this window.
echo ============================================================
echo.

powershell.exe -NoProfile -ExecutionPolicy Bypass -File "%~dp0scripts\preview-server.ps1" -Root "%ROOT%" -Port %PORT%

echo.
echo Server stopped.
pause
