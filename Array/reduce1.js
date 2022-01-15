// Um acumulador de valores

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45, "fragil": true }',
    '{ "nome": "Caderno", "preco": 16.99, "fragil": false }',
    '{ "nome": "Caramelo", "preco": 206.99 , "fragil": false}',
    '{ "nome": "Mac book", "preco": 2.99 , "fragil": false}'
]

const paraObjeto = json => JSON.parse(json)
const mostrarPrecos = objeto => objeto.fragil
const acumulador = (acumulador, atual) => parseFloat(acumulador + atual)

//console.log(carrinho.map(paraObjeto).map(mostrarPrecos).reduce(acumulador, 0));

console.log(carrinho.map(paraObjeto).map(mostrarPrecos).reduce(function (acu, atual) {
    console.log(acu, atual);
    return acu || atual
}));