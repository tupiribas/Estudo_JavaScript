const sequencia = {
    _id: 1,
    get id() { return this._id++ }
}

const produtos = {}

function setProduto(produto) {
    if (!produto.id) produto.id = sequencia.id

    produtos[produto.id] = produto
    return produto
}

function getProdutoById(id) {
    return produtos[id] || {}
}

function getAllProdutosForValues() {
    return Object.values(produtos)
}

function getAllProdutosForObject() {
    return produtos
}

function deleteProdutoById(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { 
    setProduto, 
    getProdutoById, 
    getAllProdutosForValues, 
    getAllProdutosForObject, 
    deleteProdutoById 
}