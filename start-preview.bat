@echo off
cd /d "%~dp0"
if not exist "public\index.html" (
  echo public\index.html 不存在，请先运行 Hugo 构建站点。
  pause
  exit /b 1
)
node preview-server.js
