/**
 * Servidor de desenvolvimento
 * Qualquer arquivo que for modificado, o projeto será disparado
 * automaticamente com as novas alterações.
 */
const gulp = require('gulp')

function monitorarArquivos(callback) {
    return callback()
}

function servidor(callback) {
    return callback()
}

module.exports = {
    monitorarArquivos,
    servidor
}