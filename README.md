# QRcode_Generator
## This Project helps you Generate qrcodes by
* Pasting your links or text from your browser
* Adding your links in your code then generating QR either as an IMAGE, on the CONSOLE, or in base64 format.

### To Start the project
* Note: yarn was used for this project not NPM
* I used Http2 (https) not http1 <br>
** run <br>
> yarn init
* For Http2
#### install chocolatey
> run powershell as admin and
* paste this 
> 
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))

##### serve https locally from your machine
> run
`choco install mkcert` <br>
> Create a locally trusted CA with
`mkcert -install` <br>
> Generate an SSL certificate with
`mkcert localhost` <br>

>yarn start (edited my scripts to start index.js {package.json}) <br>
>run node 
`qrcode_terminal.js` to generate QR on console <br>
`qrcode_image.js` to generate QR as image <br>
 `qrcode_base64` to generate QR in base64 format.
