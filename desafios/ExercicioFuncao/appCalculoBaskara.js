function expoente(base, expoente) {
    let baseExpoente = base
    for (let i = 1; i <= expoente - 1; i++) {
        base = base * baseExpoente
    }
    return base;
}

function calculoDeBasckara(a = 2, b = 1, c = 0) {
    if (a == 0 || b == 0 || c == 0) {
        console.log('A equação está incompleta. Verifique os valores!')
    }
    else {
        let delta = expoente(b, 2) - 4 * (a * c)
        let x1 = (-b + Math.sqrt(delta)) / (2 * a)
        let x2 = (-b - Math.sqrt(delta)) / (2 * a)
        
        delta <= 0 ? console.log("Delta negativo: " + delta) 
            : console.log("Valor final: [" + x1 + ", " + x2 + "]")
    }
}

calculoDeBasckara(2, 1, -9);