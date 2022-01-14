console.log(typeof Array, typeof new Array, typeof []) // array array array literal

let aprovados = new Array('Bia', 'Carlos', 'Amanda', 'Larissa') // Não recomendada
console.log(aprovados)

aprovados = ['Joana', 'Carlos', 'Wagner']
console.log(aprovados[0])
console.log(aprovados[1])

aprovados[2] = 'Pedro'
aprovados.push('Ana')
console.log(aprovados)
console.log(aprovados.length);

aprovados[9] = 'Marcos'
console.log(aprovados);
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // true

console.log("\n", aprovados);
aprovados.sort() // ordena em ordem alfabética 
console.log(aprovados);

delete aprovados[1]
console.log(aprovados);

aprovados = ['Luiz', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2') // indice e 1 elemento. Se fosse 1, 2 a apartir do indice 1 ele irá excluir 2 elementos após o primeiro.
console.log(aprovados);
