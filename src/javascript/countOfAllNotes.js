import countOfNotesRenderer from './countOfNotesRenderer';
import countOfSameCategoryNotes from './countOfSameCategoryNotes';

const archiveCounterTableBody = document.querySelector(
  '.note-counter-table-tbody'
);

function countOfAllNotes(notes, archivedNotes) {
  archiveCounterTableBody.innerHTML = '';
  const notesQuantity = countOfSameCategoryNotes(notes);
  const archivedNotesQuantity = countOfSameCategoryNotes(archivedNotes);
  countOfNotesRenderer(notesQuantity, archivedNotesQuantity);
}

try {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
  countOfAllNotes(notes, archivedNotes);
} catch {
  console.log('Something went wrong');
}

export default countOfAllNotes;
