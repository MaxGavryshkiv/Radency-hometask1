import notes from './notes';
import archivedNotes from './archivedNotes';

if (!localStorage.getItem('notes')) {
  localStorage.setItem('notes', JSON.stringify(notes));
}

if (!localStorage.getItem('archivedNotes')) {
  localStorage.setItem('archivedNotes', JSON.stringify(archivedNotes));
}

function pushToStorage(arr, nameOfData) {
  localStorage.setItem(nameOfData, JSON.stringify(arr));
}

export default pushToStorage;
