const validator = require('validator');
const notes = require('./notes.js');

const msj = notes();

console.log(msj);

console.log(validator.isEmail('erickvicentin14@hotmail.com'));
console.log(validator.isURL('erickvicentin.github.io'));

/*
 * const msj = require('./utils.js');
 * console.log(msj);
 */
