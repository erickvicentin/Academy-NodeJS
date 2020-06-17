// @node_modules
const yargs = require('yargs');
const validator = require('validator');
const chalk = require('chalk');

// @own_modules
const notes = require('./notes.js');

// Create add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note content',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    notes.listNotes();
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function (argv) {
    notes.readNote(argv.title);
  },
});

/* if (cmd === 'add') {
  console.log(ch.green('Add: '));
} else if (cmd === 'ed') {
  console.log(ch.yellowBright('Edit: '));
} else if (cmd === 'rm') {
  console.log(ch.red('Remove: '));
} */

yargs.parse();
