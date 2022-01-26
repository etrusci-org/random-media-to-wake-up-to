@ECHO OFF

:: --------------------------------------
:: Usage:
:: $ cd <project_directory>/
:: $ ./tool/sass-watch.cmd
::
:: Config:
SET input="./src/style.scss"
SET output="./build/style.css"
:: --------------------------------------

sass ^
    --watch ^
    --update ^
    --style expanded ^
    --charset ^
    --source-map ^
    %input%:%output%
