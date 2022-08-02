const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (valor = 5, listar = false, hasta) => {

    try {
        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            salida += `${ valor } x ${ i } = ${ valor * i }\n`;
            consola += `${ valor } ${'x'.red} ${i} ${'='.green} ${ valor * i}\n`;
        }

        if (listar){
            console.log('==================');
            console.log('   Tabla del    ', colors.yellow(valor));
            console.log('==================');
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${valor}.txt`, salida);
        return `Archivo tabla-${valor}.txt`;
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}