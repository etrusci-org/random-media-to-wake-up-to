@ECHO OFF

:: --------------------------------------
:: Usage:
:: $ cd <project_directory>/
:: $ ./tool/csso-watch.cmd
::
:: Config:
SET inputFile="./build/style.css"
SET outputFile="./app/res/style.min.css"
:: --------------------------------------

csso ^
    --watch ^
    --stat ^
    --comments none ^
    --input-source-map auto ^
    --source-map none ^
    --input %inputFile% ^
    --output %outputFile%
