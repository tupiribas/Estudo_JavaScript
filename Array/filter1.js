const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45, "fragiu": true }',
    '{ "nome": "Caderno", "preco": 16.99, "fragiu": false }',
    '{ "nome": "Caramelo", "preco": 206.99 , "fragiu": true}',
    '{ "nome": "Mac book", "preco": 2 .99 , "fragiu": true}'
]

const paraObjeto = json => JSON.parse(json)
const somenteNome = produto => produto.nome
const filtrarPreco = p => p.preco <= 20

console.log(carrinho.map(paraObjeto).filter(filtrarPreco).map(somenteNome));