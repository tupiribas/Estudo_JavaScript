// Tagget template - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const nome = 'Tupi'
const situacao = 'Aprovado'
const notaTotal = 9.8

console.log(tag`${nome} está ${situacao} com nota ${notaTotal}`);