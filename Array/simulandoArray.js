const quaseArray = { 0: 'Amanda', 1:'Joana', 2:'Lais' }
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray[0]);

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray); // [ 'Amanda', 'Joana', 'Lais']

