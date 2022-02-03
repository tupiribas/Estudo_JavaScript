function removerVogais(palavra = "") {
    return palavra.replace(/[aeiou]/g, '')
}

console.log(removerVogais("funcionario"));
