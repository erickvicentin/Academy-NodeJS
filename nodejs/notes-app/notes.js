// @node_modules
const fs = require('fs');
const chalk = require('chalk');

const listNotes = () => {
  console.clear();
  const notes = loadNotes();
  notes.forEach((note) => {
    console.log(chalk.green(`Title: ${note.title}`));
    console.log(chalk.white(`######################`));
  });
};

const addNote = (title, body) => {
  console.clear();
  const notes = loadNotes();
  const duplicateNotes = notes.filter((note) => note.title === title);

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

const removeNote = (title) => {
  console.clear();
  const notes = loadNotes();
  const newNotes = notes.filter((note) => note.title !== title);

  notes.length !== newNotes.length
    ? console.log(chalk.green.inverse(`Title "${title}" removed.`))
    : console.log(chalk.red.inverse(`The title "${title}" not exist.`));

  saveNote(newNotes);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync('notes.json', dataJSON);
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
};
