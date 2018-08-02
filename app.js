const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");
const colors = require("colors");

let comando = argv._[0];

switch (comando) {
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(nameFile => {
        console.log(`Archivo creado: ${colors.green(nameFile)}`);
      })
      .catch(e => {
        console.log(e);
      });
    break;
  case 'listar':
    listarTabla(argv.base, argv.limite).then( data => {
        console.log(data);
    })
    .catch( e => {
        console.log(e);
    });
    break;
  default:
    console.log("Comando no reconocido");
    break;
}

// base = "8";

// console.log(module);
// console.log(process.argv);
// let argv2 = process.argv;

// console.log(argv);
// console.log(argv2);
// let parametro = argv[2];
// let base = parametro.split('=')[1];
