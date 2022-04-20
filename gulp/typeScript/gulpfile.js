const { series } = require('gulp')
const gulp = require('gulp')
const typeScript = require('gulp-typescript')
const tsProject = typeScript.createProject('tsconfig.json')
const babel = require('gulp-babel')
const uglify = require('gulp-uglify')
const concat = require('gulp-concat')

function transformacaoTS() {
    return tsProject.src()
        .pipe(tsProject())
        .on('erro', erro => console.log('ERRO COD.:001 >>> Erro na transformação do TypeScript', erro))
        .pipe(gulp.dest('build'))
}

function minimizarArquivos() {
    return gulp.src('build/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ['env']
        }))
        .pipe(uglify())
        .on('erro', erro => console.log('ERRO COD.:002 >>> Erro ao minimizar arquivos', erro))
        .pipe(concat('app.min.js'))
        .pipe(gulp.dest('build'))
}

module.exports.default = series(
    transformacaoTS,
    minimizarArquivos
)