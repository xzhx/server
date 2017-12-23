const yargs = require('yargs')
const Server = require('./app.js')
const argv = yargs
    .usage('door [opthins]')
    .option('p',{
        alias:'port',
        describe: '端口号',
        default: 2326
    })
    .option('h',{
        alias:'hostname',
        describe:'host',
        default:'127.0.0.1'
    })
    .option('d',{
        alias: 'root',
        describe:'root path',
        default:process.cwd()
    })
    .version()
    .alias('v','version')
    .help()
    .argv


const server = new Server(argv)
server.start()