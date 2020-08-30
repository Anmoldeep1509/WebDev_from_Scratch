const yargs = require('yargs')
const chalk = require('chalk')

yargs.version('1.0.0')

// console.log(yargs.argv);

yargs.command({
    command: 'list',
    describe: 'Lists data from main file',
    handler() {
        console.log('Here is all your data');
    }
})

yargs.command({
    command: 'check',
    describe: 'Just a dummy command',
    handler: function() {
        console.log('Hi you just hit check');
    }
})


yargs.parse()

// console.log(process.argv);
// console.log(yargs.argv);