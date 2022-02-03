function contarCaractere(letra = '', frase = "") {
    return frase.split(letra).length - 1
}

console.log(contarCaractere('x', "Conhece-te ccccc a ti mesmo"));
