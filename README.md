# kettraworld-ping

❤️ se você gostou deste projeto não se esqueça de visita a gente no [github](https://github.com/sebastianjnuwu)

# informações

você pode usá-lo para manter seu repl.it/site ou projetos semelhantes on-line 24 horas por dia, 7 dias por semana!

• ⏱️ Fácil de usar e toltalmente gratis!

• 🚀 Você também pode criar um servidor web para o seu projeto, para torná-lo pingável

• ⚙️ Opção de intervalo de ping personalizado e porta personalizada para opção de servidor da web

# documentação

| Métodos                              | Modelo | Descrição |
| ------------------------------------ | ------ | ----------|
| ping("Seu url", seu intervalo em ms)| String, Object | Começa a fazer ping no url fornecido todas as vezes fornecidas |
| webserver(sua porta) | Objeto | Crie um websever simples para o seu projeto, para torná-lo pingável | 

# codigo 

```js
const ping = require("kettraworld-ping") 

ping.webserver(3000) 

ping.ping("http://0.0.0.0:3000") 

```

