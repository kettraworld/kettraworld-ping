# information

you can use it to keep your repl.it/site or similar projects online 24/7!

•  ⏱️  Easy to use and completely free!

•  🚀  You can also create a web server for your project, to make it pingable

•  ⚙️  Custom ping range option and custom port for web server option

# documentação

| methods                              | Model | Description |
| ------------------------------------ | ------ | ----------|
| ping("your url", interval in ms)| String, Object | Starts pinging the given url. |
| webserver(your door) | Objeto | Create a simple websever for your project to make it pingable. | 

# code 

```js
const ping = require("kettraworld-ping") 

ping.webserver(3000) 

ping.ping("http://0.0.0.0:3000") 

```