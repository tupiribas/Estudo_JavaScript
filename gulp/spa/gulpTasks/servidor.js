/**
 * Servidor de desenvolvimento
 * Qualquer arquivo que for modificado, o projeto será disparado
 * automaticamente com as novas alterações.
 */
const gulp = require('gulp')
const webserver = require('gulp-webserver')
const watch = require('gulp-watch')

function servidor() {
    return gulp.src('build')
    .pipe(webserver('configserver.json'))
}

function monitorarArquivos(callback) {
    watch('src/**/*.html', () => gulp.series('appHTML')())
    watch('src/**/*.scss', () => gulp.series('appCSS')())
    watch('src/**/*.js', () => gulp.series('appJS')())
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())

    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}