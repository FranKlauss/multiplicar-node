// requireds
const fs = require("fs");
const colors = require("colors");

let listarTabla = ( base, limite = 10 ) => {
  return new Promise( (resolve, reject) => {

    if (!Number(base)) {
      reject(`${ base } no es un número`);
    }
    
    if (!Number(limite)) {
      reject(`${ limite } no es un número`);
    }

    console.log('==================='.green);
    console.log(`tabla del ${ base }`.green);
    console.log('==================='.green);

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${ base } * ${ i } = ${ base * i }\n`;
    }

    resolve(data);
  });
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
        reject(`${ base } no es un número`);
        return;
    }

    let data = "";

    for (let i = 1; i <= limite; i++) {
      data += `${base} * ${i} = ${i * base}\n`;
    }

    fs.writeFile(`tabla-${ base }-al-${ limite }.txt`, data, err => {
      if (err)
        reject(err);
      else 
        resolve(`tabla-${ base }-al-${ limite }.txt`);
    });

  });
};

module.exports = {
    crearArchivo,
    listarTabla
};
