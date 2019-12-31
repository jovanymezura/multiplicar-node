const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limit: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Printer IN COSOLE', opts)
    .command('crear', 'Genera el archivo IN COSOLE', opts)
    .help()
    .argv;

module.exports = {
    argv
}