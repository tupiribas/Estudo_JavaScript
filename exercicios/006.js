function inverso(valor) {
    const tipo = typeof valor

    if (typeof tipo == 'number') 
        return -valor
    else if (typeof tipo == 'boolean') 
        return !valor
    else 
        return "booleano ou números esperado, mas o parâmetro é do tipo string"
}

console.log(inverso(0));