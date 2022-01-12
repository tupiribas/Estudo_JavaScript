// Cadeia de protótipo (prototype chain)

const avo = { attr1: 'A' }
const pai = { __proto__: avo, attr2: 'B', attr3: 'C', attr4: 'D'} // attr -> sobrescrita
const filho = { __proto__: pai, attr3: 'C' }

console.log(filho.attr1, filho.attr2, filho.attr3);

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        }
        else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h ${this.velMax}Km/h`
    }
}

const ferrai = {
    modelo: 'F40',
    velMax: 324,
}

const volvo = {
    modelo: 'V8',
    velMax: 205,
    status() {
        return `${this.modelo} ${super.status()}`
    }
}

Object.setPrototypeOf(ferrai, carro)
Object.setPrototypeOf(volvo, carro)

ferrai.acelerarMais(100)
console.log(ferrai);

volvo.acelerarMais(100)
console.log(volvo.status());