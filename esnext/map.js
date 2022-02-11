const tecnologias = new Map();
tecnologias.set('react', { framework: false });
tecnologias.set('angular', { framework: true });

console.log(tecnologias);
console.log(tecnologias.get('react').framework); // retorna o valor do map

const chavesVariadas = new Map([
    [function () { }, 'Função'],
    [{}, 'Objeto'],
    [123, 'Número'],
    ['123', 'String']
])
chavesVariadas.forEach((valor, chave) => {
    console.log(chave, valor);
})

console.log(chavesVariadas.has(123)); // verifica se a chave existe no Map
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123));
console.log(chavesVariadas.size); // retorna 3

// Não pode haver chaves duplicadas!
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas.size); // retorna 4