//=================================================================
// Requiereds: Grabando archivos a disco
//=================================================================

const fs = require('fs');
const colors = require('colors');

// let listarTabla = (base, limite) => {

//     for (let i = 1; i <= limite; i++) {
//         console.log(`${base} * ${i} =  ${base * i}\n`)
//     }
// }

let listarTabla = (base, limite = 10) => {
    console.log('=========================='.green);
    console.log(` Tabla de ${base}`.green);
    console.log('=========================='.green);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`)
    }
}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, rejet) => {

        if (!Number(base)) {
            rejet(`El valor introducido ${ base } no es un número`)
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} =  ${base * i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${ limite}.txt`, data, (err) => {

            if (err) {
                rejet(err);
            } else {
                resolve(`tabla-${base}-al-${limite}.txt`);
            }
        })
    })
}

module.exports = {
    crearArchivo,
    listarTabla
}