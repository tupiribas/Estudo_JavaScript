const aprovados = ['Vedel', 'Marcos', 'Marroni', 'Wesley']
aprovados.pop() // remove o ultima
console.log(aprovados);

aprovados.push('Vinicius') // adiciona
console.log(aprovados);

aprovados.shift() // remove o primeiro
console.log(aprovados);

aprovados.unshift('Laércio') // adiciona antes do primeiro
console.log(aprovados);

console.log(aprovados.length); // Tamanho

// Adicionar
aprovados.splice(2, 0, 'Bottas', 'Massa')
console.log(aprovados);

// Remove
aprovados.splice(2, 2)
console.log(aprovados);

const algunsPilotos1 = aprovados.slice(2) // novo array
console.log(algunsPilotos1);

const algunsPilotos2 = aprovados.slice(1, 4)
console.log(algunsPilotos2);