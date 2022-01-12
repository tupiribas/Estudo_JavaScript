const fabricantes = ["Mercedes", "Audi", "BMW", "Mais..."]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)

