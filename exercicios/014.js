function objetoParaArray(objeto) {
    const chave = Object.keys(objeto)
    const resultado = chave.map( c => [c, objeto[c]] )
    return resultado
}

console.log(objetoParaArray({
    codigo: 11111,
    preco: 12000
}));