const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 16.99 }',
    '{ "nome": "Caramelo", "preco": 206.99 }'
]

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const precos = carrinho.map(paraObjeto).map(apenasPreco)
console.log(precos);

