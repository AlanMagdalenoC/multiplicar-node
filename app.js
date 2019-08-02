//se importan las funciones disponibles desde el archivo multiplicar    
const argv = require('./config/yargs').argv;
const colors = require('colors');
const { createFile, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];
switch (command) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        createFile(argv.base, argv.limite)
            //.then(archivo => console.log(`Archivo creado ${archivo}`.green))
            //.then(archivo => console.log(`Archivo creado `, colors.green(archivo)))
            .then(archivo => console.log(`Archivo creado ${archivo.green}`))
            .catch(err => console.log(err));
        break;
    default:
        console.log("no reconocido");
}



//let argv2 = process.argv;
//let parametro = argv[2];
//let base = parametro.split('=')[1];

// console.log(argv.base);