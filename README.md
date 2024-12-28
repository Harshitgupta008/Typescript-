# Typescript-
Typescript 

# Type script install globally in our system
npm i -g typescript

# In project
npm i typescript

# tsc install in our system
npx tsc

# For compile use tsc it will convert your file or page from typescript to javascript
tsc page-name 

# If you don’t want to install TypeScript globally, you can compile TypeScript files using npx
npx tsc app.ts

# Error -> 

# some window throw error after check tsc --version
tsc : File C:\Users\Harshit\AppData\Roaming\npm\tsc.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see </br>
about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170. </br>
At line:1 char:1 </br>
+ tsc --version </br>
+ ~~~ </br>
+ CategoryInfo          : SecurityError: (:) [], PSSecurityException </br>
+ FullyQualifiedErrorId : UnauthorizedAccess fix error after check version </br>

# Also If you get an error like 'tsc' is not recognized as an internal or external command
# So Fix this Problem -->

# 1. Open PowerShell as Administrator and add this command
Get-ExecutionPolicy </br>
# 2. Change the Execution Policy to Allow Scripts
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
# Now  Verify the tsc Command
chekc - > tsc --version


