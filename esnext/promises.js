function falarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!frase) reject('Insira uma frase boa');
            resolve(frase)
        }, segundos * 1000);
    })
}

falarDepoisDe(3, 'Olá Tupi').
    then(frase => frase.concat(', boa noite!')).
    then(outraFrase => console.log(outraFrase)).catch(erro => console.log(erro))
