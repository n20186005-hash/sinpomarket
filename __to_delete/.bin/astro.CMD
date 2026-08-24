@SETLOCAL
@IF NOT DEFINED NODE_PATH (
  @SET "NODE_PATH=C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\astro@7.2.4_@astrojs+markdo_261009b1e82b42a806a0e9897904925c\node_modules\astro\node_modules;C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\astro@7.2.4_@astrojs+markdo_261009b1e82b42a806a0e9897904925c\node_modules;C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\node_modules"
) ELSE (
  @SET "NODE_PATH=C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\astro@7.2.4_@astrojs+markdo_261009b1e82b42a806a0e9897904925c\node_modules\astro\node_modules;C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\astro@7.2.4_@astrojs+markdo_261009b1e82b42a806a0e9897904925c\node_modules;C:\Users\Administrator\Documents\GitHub\sinpomarket\node_modules\.pnpm\node_modules;%NODE_PATH%"
)
@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\astro\bin\astro.mjs" %*
) ELSE (
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\astro\bin\astro.mjs" %*
)
