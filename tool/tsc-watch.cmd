@ECHO OFF

:: --------------------------------------
:: Usage:
:: $ cd random-media-to-wake-up-to/
:: $ ./tool/tsc-watch.cmd
::
:: Config:
SET tsconfigFile="./tsconfig.json"
:: --------------------------------------

tsc --watch -p %tsconfigFile%
