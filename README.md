# information

you can use it to keep your repl.it/site or similar projects online 24/7!

•  ⏱️  Easy to use and completely free!

•  🚀  You can also create a web server for your project, to make it pingable

•  ⚙️  Custom ping range option and custom port for web server option

# documentação

| methods                              | Model | Description |
| ------------------------------------ | ------ | ----------|
| ping("url", interval in ms); | String, Number | Starts pinging the given url. |
| webserver(port); | Number | Create a simple websever for your project to make it pingable. | 

# code 

```js
 // importing the package
import ping from 'kettraworld-ping';
 
 // creating the server, default port 3000
ping.webserver();

 // ping a website...
ping.ping('http://0.0.0.0:3000', 10000);
```