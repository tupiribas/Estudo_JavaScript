const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const porta = 3003

// Se utiliza caso não utilize uma url expecífica
/**
 * As funções de middleware integradas do Express, express.bodyParser
 * não estão mais disponíveis no objeto express. 
 * É preciso instalar manualmente as alternativas e carregá-las na aplicação.
 */
app.use(bodyParser.urlencoded({ extended: true }))

const produto = require('./entidade/produto.js')
const bancoDeDados = require('./bancoDeDados.js')

// parte 2

// Mostrar Todos Os produtos
app.get('/produtos', (req, resp, next) => {
    resp.send(bancoDeDados.getAllProdutosForObject())
})
// Mostrar pelo Id
app.get('/produtos/:id', (req, resp, next) => {
    resp.send(bancoDeDados.getProdutoById(req.params.id))
})

// Adicionar
app.post('/produtos', (req, resp, next) => {
    const produto = bancoDeDados.setProduto({
        nome: req.body.nome,
        preco: req.body.preco,
        desconto: req.body.desconto
    })
    resp.send(produto) // JSON
})

// Atualizar Produto
app.put('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.setProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco,
        desconto: req.body.desconto
    })
    resp.send(produto) // JSON
})

// Deletar produto pelo Id
app.delete('/produtos/:id', (req, resp, next) => {
    const produto = bancoDeDados.deleteProdutoById(req.params.id)
    resp.send(produto) // JSON
})


// parte 1
app.get('/produtos', (requisicao, resposta, next) => {
    resposta.send(produto.obj2) // converter o objeto para o formato JSON automaticamente
})

app.listen(porta, () => {
    console.log(`O servidor foi executado na porta ${porta}.`);
})