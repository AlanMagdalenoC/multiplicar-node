//const fs, cuano es nativo de node
//const express extensiones de terceros
//si empiezan con ./ son archivos generados por nosotros
// después de un let o const {} significa destructuración
const opts = {
    base: {
        demand: true,
        alias: 'b',
    },
    limite: {
        alias: 'l',
        default: 10,
    }
}
const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con los parametros de base y limite', opts)
    .help() //Imprime en consola los parametros que permite la función, creado con yargs
    .argv;


module.exports = {
    argv
}