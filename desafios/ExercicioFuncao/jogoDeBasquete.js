// quantidade de maior valores
const pontuacaoDosJogos = ["10", "20", "20", "8", "25","25", "9", "3", "8", "3", "-1", "30", "1", "-4"].map(x => parseInt(x))

// Filtros
const filtroDoMaiorValorEValoresIguais = (x, i) => x > pontuacaoDosJogos[0] && pontuacaoDosJogos.indexOf(x) === i

// execução
const qntDeRecordes = pontuacaoDosJogos.filter(filtroDoMaiorValorEValoresIguais).length
const menorPontuacao = pontuacaoDosJogos.filter((x, y) => {
        let menor = 0;

        if (x < menor) {
            menor = y;
        }
        else {
            menor = menor
        }
    })

console.log(qntDeRecordes);
console.log(menorPontuacao);
