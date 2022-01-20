const moduloA = require("../../moduloA") // caminho relativo
console.log(moduloA.ola);

const saudacao = require('saudacao') // não precisa de caminho relativo pois, dentro de saudação, existe o arquivo index

console.log(saudacao.olaSingular);
console.log(saudacao.olaPlural);

const moduloC = require('./pastaC/index')

console.log(moduloC.ola);

const http = require('http')
http.createServer((req, res) => {
    res.write(moduloC)
    res.end()
}).listen(8080);