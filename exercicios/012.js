function removerPropriedade(objeto = {}, propriedade) {
    const copia = Object.assign({}, objeto)
    delete copia[propriedade]
    return copia
}

console.log(removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao"))