const nomeDoMes = (numeroDoMes) => {
    switch (numeroDoMes) {
        case 1: return  "Janeiro"
        case 2: return  "Fevereiro"
        case 3: return  "Março"
        case 4: return  "Abril"
        case 5: return  "Maio"
        case 6: return  "Junho"
        case 7: return  "Julho"
        case 8: return  "Agosto"
        case 9: return  "Setembro"
        case 10: return "Outubro"
        case 11: return "Novembro"
        case 12: return "Dezembro"
        default: return "Insira um número de 1 à 12!"
    }
}

console.log(nomeDoMes(1));

// Outra resolução
function nomeDoMes2(numeroMes) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 
                   'Junho', 'Julho','Agosto', 'Setembro', 'Outubro', 
                   'Novembro', 'Dezembro']
    return meses.length < numeroMes ? 
            "Insira um número de 1 à 12!o" : meses[numeroMes - 1]
}

console.log(nomeDoMes2(1));