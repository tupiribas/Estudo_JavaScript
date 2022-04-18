const gulp = require('gulp');
// const { series } = require('gulp') Possibilidade
const series = gulp.series

// Copiar arquivos ou pastas
function copiar(callbeck) {
    console.log('Tarefa de copiar');
    return callbeck()
}

module.exports.default = series(copiar)