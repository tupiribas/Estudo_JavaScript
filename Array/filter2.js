Array.prototype.filter2 = function (callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45, "fragil": true }',
    '{ "nome": "Caderno", "preco": 16.99, "fragil": false }',
    '{ "nome": "Caramelo", "preco": 206.99 , "fragil": true}',
    '{ "nome": "Mac book", "preco": 2.99 , "fragil": true}'
]

const paraObjeto = json => JSON.parse(json)
const somenteNome = produto => produto.nome
const filtrarPreco = p => p.preco <= 20

console.log(carrinho.map(paraObjeto).filter2(filtrarPreco).map(somenteNome));

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(a.filter2(function(x) {
    if (x < 9) {
        return x
    }
}));
