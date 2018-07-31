const fs = require('fs');




let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        console.log("este es el limite:" + limite);

        if (!Number(base)) {
            reject("No es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\r`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}.txt`)
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject("No es un numero");
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        resolve(data);
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}