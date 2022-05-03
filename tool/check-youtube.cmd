@ECHO OFF

:: --------------------------------------
:: Usage:
:: $ cd <project_directory>/
:: $ ./tool/check-youtube.cmd
:: --------------------------------------

youtube-dl --simulate --ignore-errors --batch-file tool/slugs-youtube.txt
