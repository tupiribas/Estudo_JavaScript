const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.'))
// ler os dados e transformar em obj
app.use(bodyParser.urlencoded({ extended: true })) 
app.use(bodyParser.json())

app.get('/teste', (req, res) => res.send('Ok'))
app.listen(8081, () => console.log('Servidor inicializado.'))