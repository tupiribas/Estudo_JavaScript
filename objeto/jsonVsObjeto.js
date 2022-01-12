const obj = { 
    a: 1, b: 2, c: 3, d: 4, nome: 'Tupi', entregue: true, 
    soma() { return this.a + this.b + this.c + this.d }, 
    pessoa: { 
        nome: 'Lara', 
        idade: 25
    }, 
    produtosComprados: ['Açucar', 2, 'Leite', 3]
}

console.log(JSON.stringify(obj));
const obj1 = JSON.stringify(obj)

console.log(JSON.parse(obj1));