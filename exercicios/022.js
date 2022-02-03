function funcaoDaSorte(numero) {
    // Escolha do programador
    const valorMinimo = 0
    const valorMaximo = 10
    const inclusivo = 1 // 1/0 => SIM/NÃO or YES/NO
    const gerarNumeroAleatorio = parseInt(Math.random() * (valorMaximo - valorMinimo + inclusivo)) +  valorMinimo

    return gerarNumeroAleatorio === numero ? 
           `Parabéns! O número sorteado foi o ${gerarNumeroAleatorio}`  :
           `Que pena! O número sorteado foi o ${gerarNumeroAleatorio}`
}

console.log(funcaoDaSorte(3));
