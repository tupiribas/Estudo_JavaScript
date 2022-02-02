// Soma total das despesas
function despesasTotais(arrayObj = [0]) {
    let soma = 0
    arrayObj.forEach(x => soma += x.preco)
    if (soma == 'NaN') return 0
    return soma
}

function despesasTotais2(arrayObj = [{valor: 0}]) {
    return arrayObj.reduce((acumulador, item) => acumulador + item.preco, 0)
}

console.log(despesasTotais2([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]))
