const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => {
                console.log("========tabla======".green);
                console.log(tabla);
            }).catch(err => console.log(err));
        break;
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log('se ha guardado el archivo: ' + archivo);
            }).catch(err => console.log(err));
        break;
    default:
        console.log('comando no reconocido');
        break;
}


// console.log(base);

// crearArchivo(base)
//     .then(archivo => {
//         console.log('se ha guardado el archivo: ' + archivo);
//     }).catch(err => console.log(err));