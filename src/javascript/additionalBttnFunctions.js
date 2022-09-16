import pushToStorage from './localStorage';
import noteRenderer from './noteRenderer';
import countOfAllNotes from './countOfAllNotes';

import { openEditModal } from './openCloseModal';

const archivedTableTbody = document.querySelector('.archive-note-table-tbody');

function editNote(id) {
  let notes;
  let archivedNotes;
  try {
    notes = JSON.parse(localStorage.getItem('notes'));
    archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  } catch {
    console.log('addBttn');
  }
  let indexOfNote = notes.findIndex(el => el.id === id);

  openEditModal(notes[indexOfNote]);
}

function archiveNote(id) {
  let notes;
  let archivedNotes;
  try {
    notes = JSON.parse(localStorage.getItem('notes'));
    archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  } catch {
    console.log('addBttn');
  }
  let indexOfNote = notes.findIndex(el => el.id === id);
  let archivedNote = notes.splice(indexOfNote, 1);
  archivedNotes.push(...archivedNote);
  pushToStorage(notes, 'notes');
  pushToStorage(archivedNotes, 'archivedNotes');

  noteRenderer(notes);

  countOfAllNotes(notes, archivedNotes);
}

function deleteNote(id) {
  let notes;
  let archivedNotes;
  try {
    notes = JSON.parse(localStorage.getItem('notes'));
    archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  } catch {
    console.log('addBttn');
  }
  let indexOfNote = notes.findIndex(el => el.id === id);
  notes.splice(indexOfNote, 1);
  pushToStorage(notes, 'notes');

  noteRenderer(notes);
  countOfAllNotes(notes, archivedNotes);
}

function deleteFromArchiveNote(id) {
  let notes;
  let archivedNotes;
  try {
    notes = JSON.parse(localStorage.getItem('notes'));
    archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  } catch {
    console.log('addBttn');
  }
  let indexOfNote = archivedNotes.findIndex(el => el.id === id);
  archivedNotes.splice(indexOfNote, 1);
  pushToStorage(archivedNotes, 'archivedNotes');

  noteRenderer(archivedNotes, archivedTableTbody);
  countOfAllNotes(notes, archivedNotes);
}

function unarchiveNote(id) {
  let notes;
  let archivedNotes;
  try {
    notes = JSON.parse(localStorage.getItem('notes'));
    archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  } catch {
    console.log('addBttn');
  }
  let indexOfNote = archivedNotes.findIndex(el => el.id === id);
  let unarchivedNote = archivedNotes.splice(indexOfNote, 1);
  notes.push(...unarchivedNote);
  pushToStorage(archivedNotes, 'archivedNotes');
  pushToStorage(notes, 'notes');

  noteRenderer(archivedNotes, archivedTableTbody);
  noteRenderer(notes);
  countOfAllNotes(notes, archivedNotes);
}

export {
  editNote,
  archiveNote,
  deleteNote,
  deleteFromArchiveNote,
  unarchiveNote,
};
