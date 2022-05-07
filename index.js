const fetch = require("node-fetch")
const express = require("express")
const app = express()
const chalk = require('chalk');
const log = console.log;


const ping = async function(url, interval) {
if(!url) return log(chalk.red(`[📶 kettraworld-ping ] Error: `) + `Você deve especificar o URL!`);

  function isValidUrl(string) {
    try {
      new URL(string);
    } catch (_) {
      return false;  
    }

    return true;
  }

  if(isValidUrl(url) !== true || url.includes("<" || ">" || "<script>" || "</script>") || encodeURIComponent(url).includes("%3C" || "%3E" || "%20")) return log(chalk.red(`[📶 kettraworld-ping ] Error: `) + `Inválida URL (${url})!`);


let int = interval || 60000

setInterval(async () => {
    const response = await fetch(url, {headers: {'User-Agent' : 'kettraworld-ping (NPM Package)'}}).catch(err => {
      log(chalk.red(`[📶 kettraworld-ping ] Error: `) + `falha ao pinga ${url}: ${err}`);
    });
      log(chalk.green(`[📶 kettraworld-ping ] `) + `Ping executado com sucesso ${url} com status ${response.status} (${response.statusText})`);

    status = response.status;
}, int);

const response = await fetch(url, {headers: {'User-Agent' : 'kettraworld-ping (NPM Package)'}}).catch(err => {
      log(chalk.red(`[📶 kettraworld-ping ] Error: `) + `falha ao pinga ${url}: ${err}`);
    });
      log(chalk.green(`[📶 kettraworld-ping ] `) + `Ping executado com sucesso ${url} com status ${response.status} (${response.statusText})`);

    status = response.status;

}


const webserver =  async function(port) {
let status = 200
app.get('*', (req, res) => {
    res.status(status).send(`<code>📡 This project is using <a href="https://www.npmjs.com/package/kettraworld-ping">kettraworld-ping</a> NPM package.</code>`);
});
const p = port|| 3000;

app.listen(p, () => {
log(chalk.green(`[📶 kettraworld-ping ] `) + `Webserver está escutando na porta ${p}!`);
});
}

module.exports = {
ping,
webserver
}
