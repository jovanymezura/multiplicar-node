const argv = require('./config/yargs').argv;
const colors = require('colors');



//destructuracion
const { createFile, listarTabla } = require('./multiplicar/multiplicar');
//hace referencia al arreglo ._
let comand = argv._[0];


switch (comand) {
    case 'listar':
        console.log('LISTAR');
        listarTabla(argv.base, argv.limit).then(resp => { console.log(`Message: ${resp}`) })
            .catch(e => { console.log(e) });
        break;
    case 'crear':
        console.log('CREAR');
        createFile(argv.base, argv.limit).then(file => { console.log(`Message: ${file}`) })
            .catch(e => { console.log(e) });
        break;

    default:
        console.log('Comando no reconocido');
}



// let base = '5';

// process es una variable de entorno creada por node

// let param = argv[2];
// let base = param.split('=')[1];


// console.log(argv2);