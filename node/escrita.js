const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 200.99,
    desconto: 0.5
}

const novoArquivo = __dirname + '/arquivoGerado.json'

fs.writeFile(novoArquivo, JSON.stringify(produto), erro => {
    console.log(erro || 'Arquivo salvo!');
})

fs.readFile(novoArquivo, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`Nome do produto: ${config.nome}`);
    console.log(`Valor Total (com 5% de desconto): ${(config.preco * config.desconto).toFixed(2)}`);
})
