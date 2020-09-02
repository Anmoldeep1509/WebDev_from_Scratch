const yargs = require('yargs')
const notes = require('./notes.js')


yargs.command({
    command: 'add',
    describe: 'Adds a note',
    builder: {
        title: {
            describe: 'Title of Note',
            demandOption: true,
            type: 'string' 
        },
        body: {
            type: 'string',
            demandOption: true,
            describe: 'Body of the Note'
        }
    },
    handler: function (argv) {
        // console.log('Adding note: ', argv.title, 'with body: ', argv.body);
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'list',
    describe: 'Lists All available Notes',
    handler: function () {
        // console.log('Your Notes.....');
        notes.listNotes()
    }
})

yargs.command({
    command: 'remove',
    describe: 'Deletes the note with the given title',
    builder: {
        title: {
            describe: 'Title of the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title)
    }
})

yargs.parse()