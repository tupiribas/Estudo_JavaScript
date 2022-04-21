const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appHTML, appCSS, appJS, appIMG } = require('./gulpTasks/app')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor')
const { depsCSS, depsFonts } = require('./gulpTasks/deps')

module.exports.default = series(
    parallel(
        series(appHTML, appCSS, appJS, appIMG),
        series(depsCSS, depsFonts)
    ),
    servidor,
    monitorarArquivos

)