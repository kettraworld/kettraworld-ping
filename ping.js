import { fetch } from "undici";
import express from "express";
import colors from "colors";
const { log } = console;
const app = express()

export default {
  async ping(name, url, interval) {
    
  if (!url) return log(colors.red('[ kettraworld-ping ] ') + `Error in ${name}: The provided url is invalid!`);
  
  if (interval < 10000) return log(colors.red('[ kettraworld-ping ] ') + `Error in ${name}: the minimum allowed time is "10000" ms`);
  
  const isValidUrl = (str) => {
    try {
      new URL(str)
    } catch {
      return false
    }
   return true
  }
  
  if (!isValidUrl(url) || ["<", ">", "<script>", "</script>"].includes(url) || ["%3C", "%3E", "%20"].includes(encodeURIComponent(url))) return log(colors.red('[ kettraworld-ping ] ') + `Error in ${name}: Invalid url provided "${url}"`);

  const i = interval || 60000;

  setInterval( async () => {
  const res = await fetch(url, {
   headers : { 'User-Agent': 'kettraworld-ping (NPM Package)'} 
   }).catch(() => {});
   
  if (!res) return log(colors.red('[ kettraworld-ping ] ') + `${name}: Failed to ping "${url}"`);

  if (res) return log(colors.green(`[ kettraworld-ping ] `) + `${name}: Ping executed (${url}) with the status "${res.status}"`);
   }, i);
  },
  
  // webserver creation
  async webserver(port) {
   app.get('*', (req, res) => {
   
   res.status(200).send('<code>📡 This project is using <a href="https://www.npmjs.com/package/kettraworld-ping">kettraworld-ping</a> NPM package.</code>');
  });
  
  app.listen(port || 3000, () => log(colors.green(`[ kettraworld-ping ] `) + `Webserver listening on the port ${port || 3000}`));
  }
};