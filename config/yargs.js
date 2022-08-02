const argv = require('yargs')
                    .options({
                        'b': {
                        alias: 'base',
                        type: 'number',
                        demandOption: true,
                        description: 'Es la base de la tabla de multiplicar'
                        },
                        'l': {
                            alias: 'listar',
                            type: 'boolean',
                            default: false,
                            description: 'Muestra la tabla en consola'
                        },
                        'h': {
                            alias: 'hasta',
                            type: 'number',
                            default: 10,
                            description: 'Hasta que numero multiplicar'
                        }
                    })
                    .check((argv, options ) => {
                        if ( isNaN(argv.b) ) {
                            throw 'La base tiene que ser número';
                        }

                        if ( isNaN(argv.h) ) {
                            throw 'El hasta tiene que ser número';
                        }
                        return true;
                    })
                    .argv;

module.exports = argv;