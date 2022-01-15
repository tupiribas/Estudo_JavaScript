const filhas = ['Amora', 'Maria', 'Jade']
const filhos = ['Amaro', 'Jorge', 'Lorena']

const juntarTodos = filhas.concat(filhos, 'Tupi')
console.log(juntarTodos);

console.log([].concat([1, 2, [2, 3].concat(filhos), 3]));