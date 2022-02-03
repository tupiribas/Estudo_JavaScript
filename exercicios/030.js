/**
 * Calcula a melhor media dos alunos
 */
function recerberMelhorEstudante(alunos = {}) {
    const soma = array => array.reduce((acumulado, numero) => acumulado + numero)
    const media = array => soma(array) / array.length
    const ordenarMaiorNota = (array) => array.sort((a, b) => a.media - b.media).reverse()

    const mediaDosAlunos = Object.entries(alunos).map(aluno => {
        return { nome: aluno[0], media: media(aluno[1])}
    })

    return ordenarMaiorNota(mediaDosAlunos)[0]
}

console.log(recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
}));
