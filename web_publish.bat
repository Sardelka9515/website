set PubDir=".\docs\"
if exist "%PubDir%" del /S "%PubDir%\*" /F /Q
xcopy /y /exclude:Exclusions.txt "Web\wwwroot" %PubDir% /f /s /e