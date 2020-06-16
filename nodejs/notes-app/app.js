// @node_modules
const yargs = require('yargs');
const validator = require('validator');
const chalk = require('chalk');

// @own_modules
const notes = require('./notes.js');
const file = 'notes.txt';

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
    console.log(chalk.green(`Title: ${argv.title}`));
    console.log(
      chalk.yellowBright(`${chalk.underline('Content')}: ${argv.body}`)
    );
  },
});

yargs.command({
  command: 'edit',
  describe: 'Edit a note',
  handler: function () {
    console.log(chalk.yellowBright('Editing a note'));
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: function () {
    console.log(chalk.red('Removing a note'));
  },
});

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: function () {
    console.log(chalk.red('Listing your notes'));
  },
});

yargs.command({
  command: 'read',
  describe: 'Read a note',
  handler: function () {
    console.log(chalk.red('Read a note'));
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
