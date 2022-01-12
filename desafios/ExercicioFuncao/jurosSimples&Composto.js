/**
 * Elabore duas funções que recebem três parâmetros: 
 *  capital inicial, taxa de juros e tempo de aplicação. 
 * A primeira função retornará o montante da aplicação financeira 
 * sob o regime de juros simples 
 * A segunda retornará o valor da aplicação sob o regime de juros compostos.
 */
 function expoente(base, expoente) {
    let baseExpoente = base
    for (let i = 1; i <= expoente - 1; i++) {
        base = base * baseExpoente
    }
    return base;
}

function montanteDaAplicacao(capitalInicial = 0, taxaDeJuros = 0.0, tempo) {
    return capitalInicial + taxaDeJuros
}

function valorDaAplicacao(capitalInicial = 0, taxaDeJuros = 0.0, tempo) {
    return (capitalInicial * (expoente(1 + taxaDeJuros, tempo))).toFixed(2)
}

console.log(montanteDaAplicacao(22, 54));
console.log(valorDaAplicacao(20, 0.5, 5));