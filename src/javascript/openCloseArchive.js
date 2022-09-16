import noteRenderer from './noteRenderer';

let archivedNotes;
try {
  archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
} catch {
  console.log('openArch');
}

const archivedTableTbody = document.querySelector('.archive-note-table-tbody');

const openArchiveBttn = document.querySelector('.open-archive-modal');
const closeArchiveBttn = document.querySelector('.archive-close');

const archiveModal = document.querySelector('[data-archive]');

function closeModal() {
  archiveModal.classList.add('is-hidden');
}
function openModal() {
  archiveModal.classList.remove('is-hidden');
  noteRenderer(archivedNotes, archivedTableTbody);
}

openArchiveBttn.addEventListener('click', openModal);
closeArchiveBttn.addEventListener('click', closeModal);
