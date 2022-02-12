for (const letra of 'Tupi') {
    console.log(letra); // T u p i
}

for (const i in 'Tupi') {
    console.log(i); // 0 1 2 3
}

const assuntosDados = ['Map', 'Set', 'Promise']

for (const assunto of assuntosDados) {
    console.log(assunto); // Map Set Promise
}

console.log();

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
]);

for (const assunto of assuntosMap) {
    console.log(assunto[0], assunto[1].abordado)
}

for (const assunto of assuntosMap.keys()) {
    console.log(assunto);
}

for (const assunto of assuntosMap.values()) {
    console.log(assunto);
}

console.log();

// Desestruturando
for (const [chave, valor] of assuntosMap) {
    console.log(chave, valor);
}
