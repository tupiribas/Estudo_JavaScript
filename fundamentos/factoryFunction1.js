// factory simples

function criarPessoa() {
    return {
        nome: 'Tupi',
        sobrenome: 'Guedes'
    }
}

function criarProduto(nome = '', preco = 0.0, quantidade = 0) {
    return {
        nome,
        preco,
        quantidade
    }
}

console.log(criarPessoa());
console.log(criarProduto("Barão verde", 25.95, 50));