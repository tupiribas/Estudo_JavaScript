Array.prototype.map2 = function (callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i + 1, this))
    }
    return newArray 
}

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 16.99 }',
    '{ "nome": "Caramelo", "preco": 206.99 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(precos);

const v = [1, 2, 3, 5]
const a = v.map2(function (x) {
    return x * 2
})
console.log(a);
