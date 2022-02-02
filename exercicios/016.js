function checarAnoBissexto(ano) {
    return ano % 4 == 0 ?
        ano % 100 != 0 || ano % 400 == 0 ?
            true : false
        : false
}

// verifica se o mês 1 (Fevereiro) do ano tem 29 dias
function checarAnoBissexto2(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

console.log(checarAnoBissexto2(2024));
