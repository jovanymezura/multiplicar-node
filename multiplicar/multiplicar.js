let fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base introducido ${base} no es un numero`);
            return;
        }
        if (!Number(limite)) {
            reject(`El valor limite ${limite} no es un numero`);
            return;
        }

        let data = ''

        console.log("===================".green);
        console.log(`tabla del ${base}`.green);
        console.log("===================".green);

        for (let i = 1; i <= limite; i++) {
            if (i <= limite) {
                data += `${ base } * ${i} = ${base*i}\n`;
            }
        }

        console.log(data);


    });
}


let createFile = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor introducido ${base} no es un numero`);
            return;
        }

        if (!Number(limite)) {
            reject(`El valor limite ${limite} no es un numero`);
            return;
        }

        let data = ''
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${i} = ${base*i}\n`
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)

            else resolve(`tabla ${base} done`.green);
            // console.log('The file has been saved!');
        });
    });
}

module.exports = {
    createFile,
    listarTabla
}