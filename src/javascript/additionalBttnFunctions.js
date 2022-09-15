import notes from './notes.json';
import archivedNotes from './archivedNotes.json';

import noteRenderer from './noteRenderer';
import countedOfAllNotes from './countOfAllNotes';

import { openEditModal } from './openCloseModal';

const archivedTableTbody = document.querySelector('.archive-note-table-tbody');

function editNote(id) {
  let indexOfNote = notes.findIndex(el => el.id === id);
  openEditModal(notes[indexOfNote]);
}

function archiveNote(id) {
  let indexOfNote = notes.findIndex(el => el.id === id);
  let archivedNote = notes.splice(indexOfNote, 1);
  archivedNotes.push(...archivedNote);

  noteRenderer(notes);
  countedOfAllNotes();
}

function deleteNote(id) {
  let indexOfNote = notes.findIndex(el => el.id === id);
  notes.splice(indexOfNote, 1);

  noteRenderer(notes);
  countedOfAllNotes();
}

function deleteFromArchiveNote(id) {
  let indexOfNote = archivedNotes.findIndex(el => el.id === id);
  archivedNotes.splice(indexOfNote, 1);

  noteRenderer(archivedNotes, archivedTableTbody);
  countedOfAllNotes();
}

function unarchiveNote(id) {
  let indexOfNote = archivedNotes.findIndex(el => el.id === id);
  let unarchivedNote = archivedNotes.splice(indexOfNote, 1);
  notes.push(...unarchivedNote);

  noteRenderer(archivedNotes, archivedTableTbody);
  noteRenderer(notes);
  countedOfAllNotes();
}

export {
  editNote,
  archiveNote,
  deleteNote,
  deleteFromArchiveNote,
  unarchiveNote,
};
