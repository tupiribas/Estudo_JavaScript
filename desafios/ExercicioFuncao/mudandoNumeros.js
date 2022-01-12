function convpontflut(numero = 0.0) {
    let troca = numero.toString().replace(/(?:[0][9])+\d+/g)
    let valor = Number.parseFloat(troca).toFixed(2)
    let convert = valor.replace(/[.]/g, ',')
    return convert.split(/[undefined]/g, 1).toString()
}

let v = 0.1 + 0.2
console.log("R$" + convpontflut(v));