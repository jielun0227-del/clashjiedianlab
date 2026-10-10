@echo off
cd /d "%~dp0"
if not exist "dist\index.html" (
  echo dist\index.html 不存在，请先运行 pnpm build 构建 Astro 站点。
  pause
  exit /b 1
)
node preview-server.js
