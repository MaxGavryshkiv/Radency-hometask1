import archivedNotes from './archivedNotes';
import notes from './notes';

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

try {
  counterOfAllNotes();
} catch {
  console.log('Something went wrong');
}

export default counterOfAllNotes;
