function expoente(base, expoente) {
    let baseExpoente = base
    for (let i = 1; i <= expoente - 1; i++) {
        base = base * baseExpoente
    }
    return base;
}
console.log(expoente(4, 5))