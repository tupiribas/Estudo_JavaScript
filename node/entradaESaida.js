// Buscando no terminal o caracter '-a' retornando verdadeiro oou falso
const anonimo = process.argv.indexOf('-a') !== -1
console.log(anonimo);

/**
 * (sendo true) -> irá chamar um procedimento que mostrará na tela do terminal,
 * caso contrário, ele solicitará pelo terminal o nome do usuário e imprimirá na tela do terminal
*/
if (anonimo) {
    process.stdout.write('Fala anônimo, meu jovem!\n')
    process.exit()
} 
else {
    process.stdout.write('Informe seu nome: ')
    // Após o usuário apertar enter...
    process.stdin.on('data', data => {
        const nome = data.toString()

        process.stdout.write(`Seja bem-vindo(a) ${nome}!!\n`)
        process.exit()
    })
}

