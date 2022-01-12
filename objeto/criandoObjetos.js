// usando a notação literal de objetos
const obj1 = {

}
console.log(obj1);

// obj em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object;
console.log(obj2);

// Função construtora
function Obj3(velocidade, altura) {
    this.velocidade = velocidade
    this.getVelocidade = () => {
        return `${this.velocidade}`
    }
}

const p1 = new Obj3(55)
console.log(p1.getVelocidade());
p1.velocidade = 1
console.log(p1.getVelocidade());

// Function factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome, 
        salarioBase,
        faltas,
        getSalario() {
            return (this.salarioBase / 30) * (30 - this.faltas)
        }
    }
}

const f1 = criarFuncionario("Tupi Guedes", 1000, 5)
const f2 = criarFuncionario("Vânia Guedes", 20000, 2)
const f3 = criarFuncionario("Lara Guedes", 100000000, 4)

console.log(f1.getSalario());
console.log(f2.getSalario());
console.log(f3.getSalario());

const fromJSON = JSON.parse('{"nome": "Tupi Guedes", "idade": 19}')


