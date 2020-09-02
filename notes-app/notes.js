const fs = require('fs')
const chalk = require('chalk')


const loadNotes = function () {

    try {
        const buffer = fs.readFileSync('notes.json')
        return JSON.parse(buffer)
    } catch {
        return []
    }
}

const storeNotes = function (data) {
    const buffer = JSON.stringify(data)

    fs.writeFileSync('notes.json', buffer)
}

const addNote = function (title, body) {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length > 0) // if elements exists
    {
        console.log(chalk.red.inverse('Note Title exists, Try another!'));
    } else { // title is unique
        notes.push({ title: title, body: body})
        storeNotes(notes)
    }
}

const listNotes = function () {
    const notes = loadNotes();
    let note_count = 1

    notes.forEach(element => {
        console.log(chalk.yellow('Note ' + note_count + ': ') + chalk.green(element.title));
        note_count++
    });
}

const removeNote = function (title) {
    const notes = loadNotes()

    const notesToKeep = notes.filter((note) => note.title !== title)

    if( notesToKeep.length < notes.length ) {
        storeNotes(notesToKeep)
        console.log(chalk.yellow('Note Deleted!'));
    } else {
        console.log(chalk.red('Note Title not found!'));
    }
}


module.exports = {
    addNote: addNote,
    listNotes: listNotes,
    removeNote: removeNote
}