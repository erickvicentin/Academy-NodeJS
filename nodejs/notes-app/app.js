// @node_modules
const yargs = require('yargs');
const validator = require('validator');
const ch = require('chalk');

// @own_modules
const notes = require('./notes.js');
const file = 'notes.txt';

// @app_constants
console.log(process.argv);
console.log(yargs.argv);

/* if (cmd === 'add') {
  console.log(ch.green('Add: '));
} else if (cmd === 'ed') {
  console.log(ch.yellowBright('Edit: '));
} else if (cmd === 'rm') {
  console.log(ch.red('Remove: '));
} */
