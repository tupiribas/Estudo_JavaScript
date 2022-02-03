function contarPalavras(frase = "") {
    const palavras = frase.split(" ")
    const  espacosVazios = palavras.includes('')

    if (espacosVazios) return palavras.length - 1
    return palavras !== 1 ? palavras.length : 0
}

console.log(contarPalavras("vai dua vaco"));