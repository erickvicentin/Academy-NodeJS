// @node_modules
const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
  return 'Your notes...';
};

const addNote = function (title, body) {
  console.clear();
  const notes = loadNotes();
  const duplicateNotes = notes.filter(function (note) {
    return note.title === title;
  });

  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    console.log(chalk.green.inverse('New note added'));
  } else {
    console.log(chalk.red.inverse('Note title taken!'));
  }

  saveNote(notes);
};

const removeNote = function (title) {
  console.clear();
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  notes.length !== newNotes.length
    ? console.log(chalk.green.inverse(`Title "${title}" removed.`))
    : console.log(chalk.red.inverse(`The title "${title}" not exist.`));

  saveNote(newNotes);
};

const loadNotes = function () {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNote = function (notes) {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
};
