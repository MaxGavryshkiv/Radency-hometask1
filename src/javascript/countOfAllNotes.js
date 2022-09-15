import archivedNotes from './archivedNotes.json';
import notes from './notes.json';

import countOfNotesRenderer from './countOfNotesRenderer';
import countOfSameCategoryNotes from './countOfSameCategoryNotes';

const archiveCounterTableBody = document.querySelector(
  '.note-counter-table-tbody'
);

function counterOfAllNotes() {
  archiveCounterTableBody.innerHTML = '';
  const notesQuantity = countOfSameCategoryNotes(notes);
  const archivedNotesQuantity = countOfSameCategoryNotes(archivedNotes);
  countOfNotesRenderer(notesQuantity, archivedNotesQuantity);
}

counterOfAllNotes();

export default counterOfAllNotes;
