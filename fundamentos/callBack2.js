const notas = [7.7, 3.2, 55.5, 3.2]

// Sem Callback 
let notasBaixas1 = []
for (const i in notas) {
    if (notas[i] > 7.0) {
        notasBaixas1.push(notas[i])
    }
}
console.log(notasBaixas1)


// com o CallBack

const maioresNotas = nota => nota > 7.0
const notasBaixas2 = notas.filter(maioresNotas)
console.log(notasBaixas2)