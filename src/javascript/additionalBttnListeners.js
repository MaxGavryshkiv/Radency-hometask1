import {
  editNote,
  archiveNote,
  deleteNote,
  deleteFromArchiveNote,
  unarchiveNote,
} from './additionalBttnFunctions';

const archivedTable = document.querySelector('.archive-table');
const noteTable = document.querySelector('.note-table');

archivedTable.addEventListener('click', e => {
  let target = e.target;
  let elId = target.parentNode.parentNode.dataset.id;

  if (target.nodeName === 'BUTTON') {
    if (target.classList.contains('unarchive-bttn')) {
      unarchiveNote(elId);
    }

    if (target.classList.contains('delete-bttn')) {
      deleteFromArchiveNote(elId);
    }
  }
});

noteTable.addEventListener('click', e => {
  let target = e.target;
  let elId = target.parentNode.parentNode.dataset.id;

  if (target.nodeName === 'BUTTON') {
    if (target.classList.contains('edit-bttn')) {
      editNote(elId);
    }
    if (target.classList.contains('archive-bttn')) {
      archiveNote(elId);
    }
    if (target.classList.contains('delete-bttn')) {
      deleteNote(elId);
    }
  }
});
