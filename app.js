const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors/safe');

console.clear();

// Extrayendo argumentos desde consola
// const [ , , arg3 = 'valor=5'] = process.argv;
// const [ , valor = 5 ] = arg3.split('=')
// console.log(valor);

// Utiizando dependencia de yargs
console.log(argv);

// const valor = 3;
crearArchivo(argv.b, argv.l, argv.h)
    .then( nombreArchivo => console.log(colors.bold(nombreArchivo, 'creado.')))
    .catch( err => console.log(err));