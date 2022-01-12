function getPreco(imposto = 0.0, moeda = 'R$') {
    return `${moeda}${this.preco * (1 - this.desconto) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desconto: 0.15,
    getPreco
}

global.preco = 20
global.desconto = 0.1
console.log(produto.nome, produto.getPreco())

const carro = {
    nome: 'Viena',
    preco: 4589,
    desconto: 0.15,
}

console.log(carro.nome, getPreco.call(carro));
console.log(carro.nome, getPreco.apply(carro));

console.log(carro.nome, getPreco.call(carro, 0.17, '$'));
console.log(carro.nome, getPreco.apply(carro, [0.5]));

const car = {nome: 'Civic'}
const fruta = {nome: 'Maça'}
 
function imprimirObjeto() {
    console.log(this) // O bind vai dizer quem será o this!
}
 
const imprimirCarro = imprimirObjeto.bind(car)
imprimirCarro()
 
const imprimirFruta = imprimirObjeto.bind(fruta)
imprimirFruta()