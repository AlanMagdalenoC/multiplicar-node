//requireds
const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log("===========");
    console.log(`Tabla de ${base}`.green);
    console.log("===========");

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);
    }


}

let createFile = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ingresado ${base} no es un numero`);
            return;
        }


        let data = ''

        for (let i = 1; i <= limite; i++) {
            data += (`${base} * ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`);
        });
    });
}


module.exports = {
    createFile,
    listarTabla

}