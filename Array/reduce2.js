Array.prototype.reduce2 = function (callback) {
    let r = []
    for (let i = 0; i < this.length; i++) {
        r.push(this[i])
    }
    return r
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45, "fragil": true }',
    '{ "nome": "Caderno", "preco": 16.99, "fragil": true }',
    '{ "nome": "Caramelo", "preco": 206.99 , "fragil": true}',
    '{ "nome": "Mac book", "preco": 2.99 , "fragil": false}'
]

const paraObjeto = json => JSON.parse(json)
const mostrarPrecos = objeto => objeto.preco
const acumulador = (acumulador, atual) => parseFloat(acumulador + atual)
console.log(carrinho.map(paraObjeto))
console.log(carrinho.map(paraObjeto).map(mostrarPrecos).reduce(acumulador));

// Todos os produtos são frágeis?
const somenteFragil = objeto => objeto.fragil
const verificarPodutoFragil = (resultado, objeto) => resultado && objeto

console.log(carrinho.map(paraObjeto).map(somenteFragil).reduce(verificarPodutoFragil));

// verificar se algum produto é fragil 
console.log(carrinho.map(paraObjeto).map(somenteFragil)
.reduce((resultado, objeto) => resultado || objeto))

const a = ['a', 'b', 'c', 'd', 'e']

console.log(a.reduce2(function (resultado, atual) {
    console.log(resultado, atual);
    return resultado
}));