const { parallel } = require('gulp');
const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function transformacaoCSS() {
    return gulp.src('src/sass/index.scss')
        .pipe(sass().on('erro', sass.logError))
        .pipe(uglifycss('./scssconfig.json'))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('build/css'))
}

function copiandoHTML() {
    return gulp.src('src/index.html')
        .pipe(gulp.dest('build/'))
}

module.exports.default = parallel(
    transformacaoCSS, 
    copiandoHTML
)