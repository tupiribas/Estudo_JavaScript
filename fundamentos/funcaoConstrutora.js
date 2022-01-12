function Carro(velocidadeMaxima = 200, delta = 5) {
    let velocidadeAtual = 0
    let statusDaVelocidade = false

    this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima) {velocidadeAtual += delta}
        else {velocidadeAtual = velocidadeMaxima}
    }

    this.getVelocidadeAtual = () => {return velocidadeAtual}

    const verificarVelocidade = () => {
        statusDaVelocidade = velocidadeAtual >= velocidadeMaxima 
    }

    this.getStatusVelocidade = verificarVelocidade
}

const uno = new Carro(200, 30)

console.log("Velocidade atual: ", uno.getVelocidadeAtual())
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log("Velocidade atual: ", uno.getVelocidadeAtual())
if (uno.getStatusVelocidade()) {
    console.log("Você atingiu o limite de velocidade", uno.getVelocidadeAtual());
}
