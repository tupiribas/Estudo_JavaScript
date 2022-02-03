function buscarPalavrasSemelhantes(palavraDeBusca = '', palavrasChaves = ['']) {
    return palavrasChaves.filter(palavra => palavra.includes(palavraDeBusca))
}

console.log(buscarPalavrasSemelhantes("pro", ["projeto", "javascript", "java", "profissional", "c++", 'programação']));
