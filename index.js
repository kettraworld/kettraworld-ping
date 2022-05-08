const { fetch } = require("undici")
const express = require("express")
const app = express()
const chalk = require('chalk');
const { log } = console;

module.exports = {
  async ping(url, interval) {
    if(!url) return log(chalk.red(`[ kettraworld-ping ] You must specify the url`))
    const isValidUrl = (str) => {
      try{
        new URL(str)
      } catch {
        return false
      }
      return true
    }
    if(!isValidUrl(url) || ["<", ">", "<script>", "</script>"].includes(url) || ["%3C", "%3E", "%20"].includes(encodeURIComponent(url))) return log(chalk.red('[ kettraworld-ping ] Error: Invalid url provided ' + `(${url})`))

    const i = interval || 60000;

    setInterval( async () => {
      const res = await fetch(url, {
        headers : { 'User-Agent': 'kettraworld-ping (NPM Package)'}
      }).catch((err) => log(chalk.red(`[ kettraworld-ping ] Error: Failed to ping ${url}: ${err}`)))
      log(chalk.green(`[ kettraworld-ping ] Ping executed (${url}) with the status ${res.status}`))
    }, i);
  },
  async webserver (port) {
    const status = 200;
    const PORT = port || 3000;
    app.get('*', (req, res) => {
    res.status(status).send(`<code>📡 This project is using <a href="https://www.npmjs.com/package/kettraworld-ping">kettraworld-ping</a> NPM package.</code>`);
    })
    app.listen(PORT, () => log(chalk.green(`[ kettraworld-ping ] Webserver listening on the port ${port || 3000}`)))
  }
}
