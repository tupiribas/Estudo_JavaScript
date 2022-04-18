const gulp = require('gulp');
const { series, parallel } = require('gulp')
// const series = gulp.series

antes1 = callbeck => {
    console.log('Tarefa Antes 1!');
    return callbeck()
}

antes2 = callbeck => {
    console.log('Tarefa Antes 2!');
    return callbeck()
}

// Copiar arquivos ou pastas
function copiar(callbeck) {
    try {
        // Arquivos selecionaveis
        // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        // Captura todas (**) as pastas e arquivos que contenham .txt
        gulp.src('pastaA/**/*.txt') 
            // Aplicar transformações -> cria outra pasta e cola os arquivos nela
            .pipe(gulp.dest('pastaB')) 
        return callbeck()
    }
    catch(erro) {
        console.log("ERRO COD.:001 >>> Erro de cópia!", erro);
    }
}

fim = callbeck => {
    console.log('Tarefa Fim.');
    return callbeck()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar, 
    fim
)