const soma = function (x, y) {
    return x + y
}

const multiplicacao = function (s, t) {
    return s * t
}

const imprimirResultado = function (a, b, operacao = soma) {
    console.log(operacao(a, b))
}

imprimirResultado(4, 2)
imprimirResultado(4, 2, soma)
imprimirResultado(4, 2, multiplicacao)
imprimirResultado(4, 2, function (l, d) {
    return l - d
})
imprimirResultado(22, 20, (x, y) => x / 2 - y)

const pessoa = {
    falar: function (msg) {
        console.log(msg)
    },
    falaDireito: (msg = "Direito") => console.log(msg)
}

imprimirResultado(4, 2, pessoa.falar("ola"))
imprimirResultado(4, 2, pessoa.falaDireito()) 