//=================================================================
// Requiereds: Grabando archivos a disco 
//=================================================================
// const fs = require('fs');

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
//=================================================================
// note: Para ejecutar el ejemplo, por linea de comandos ejecutar:
// node app crear--base 4 --limite 10
// node app listar--limite 12 --base 3
//=================================================================
switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        // .then(archivo => console.log(`Leer Archivo: ${ archivo }`))
        // .catch(e => console.log(e))
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ colors.green(archivo)}`))
            .catch(e => console.log(e))
        break;

    default:
        console.log('Comando no reconocido'.red);
}

// console.log(argv)
//let base = 9

// console.log(process.argv)
// let argv2 = process.argv

// let argv = process.argv
// let parametro = argv[2]
// let base = parametro.split('=')[1]

// console.log(base)

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo}`))
//     .catch(e => console.log(e))