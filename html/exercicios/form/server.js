// Importações
const express = require('express');
const bodyParser = require('body-parser');
// Instaciação
const app = express();

// Leitura do corpo da requisiçaõ (cria o objeto utilizando o urlcoded())
app.use(bodyParser.urlencoded({ extended: true }))

// Fazendo a requisição
app.post('/usuarios', (req, resp) => {
    console.log("Valor da requisição: \n", req.body);
    // Mandando a resposta renderizado no browser
    resp.send('<h1>Parabens usuário adicionado com sucesso!</h1>')
})
// Inserindo a porta
app.listen(3003)
