// Não aceita repetição / não indexada
const times = new Set();
times.add('Vasco')
times.add('Bahia')
times.add('Vitória')
times.add('Vitória')

console.log(times);
console.log(times.size);
console.log(times.has('vasco')); // false
console.log(times.has('Vasco')); // true

times.delete('Flamengo')
console.log(times.has('Flamengo'));

const nomes = ['Raquel', 'Flavia', 'Marcos', 'Flavia']
const nomesSet = new Set(nomes)
console.log(nomesSet);