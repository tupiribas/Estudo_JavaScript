const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJS(callbeck) {
    /**
     * Tive que colocar uma linha de teste (console.log("Linha de teste")) para
     * que a função fosse executada
     * Erro: $ gulp
            [21:01:59] Using gulpfile C:\Cursos_Udemy\JavaScript\inicio\gulp\javascript\gulpfile.js
            [21:01:59] Task never defined: default
            [21:01:59] To list available tasks, try running: gulp --tasks
     */
    // console.log("Linha de teste")

    return gulp.src('src/**/*.js')
        // Deixa o código mais compatível
        .pipe(babel({ 
            comments: false,   // Não transferir arquivos de comentários
            presets: ["env"] // Js mais moderno
        }))
        .pipe(uglify())
        // Tratamento de um possível erro
        .on('erro', erro => console.log('ERRO COD.:001 >>> Erro na padronização', erro))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoJS)