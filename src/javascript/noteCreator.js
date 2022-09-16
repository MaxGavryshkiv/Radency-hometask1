import pushToStorage from './localStorage';

let notes;
let archivedNotes;
try {
  notes = JSON.parse(localStorage.getItem('notes'));
  archivedNotes = JSON.parse(localStorage.getItem('archivedNotes'));
} catch {
  console.log('note is notdefined');
}

import { closeModal } from './openCloseModal';
import dateValidation from './dateValidation';
import noteRenderer from './noteRenderer';
import countOfAllNotes from './countOfAllNotes';

const form = document.querySelector('.form');

form.addEventListener('submit', noteCreator);

function noteCreator(event) {
  event.preventDefault();

  let noteName = form.elements.noteName.value;
  let noteCategory = form.elements.noteCategory.value;
  let noteContent = form.elements.noteContent.value;

  let date = new Date();
  let dateOfCreation = date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  let noteDatesOfContent = dateValidation(noteContent);
  let newId = Math.random().toString(16).slice(2);

  if (form.classList.contains('edit-form')) {
    objId = form.elements.noteName.dataset.id;
    let indexOfNote = notes.findIndex(el => el.id === objId);
    let editNotes = {
      id: `${form.elements.noteName.dataset.id}`,
      name: `${noteName}`,
      created: `${form.elements.noteName.dataset.dateOfCreation}`,
      category: `${noteCategory}`,
      content: `${noteContent}`,
      dates: `${noteDatesOfContent}`,
    };

    try {
      notes.splice(indexOfNote, 1, editNotes);
      pushToStorage(notes, 'notes');

      form.classList.replace('edit-form', 'form');
      form.reset();
      closeModal();

      noteRenderer(notes);
      countOfAllNotes(notes, archivedNotes);
    } catch {
      console.log('noteCreator Error edit');
    }

    return;
  }

  let newNotes = {
    id: `${newId}`,
    name: `${noteName}`,
    created: `${dateOfCreation}`,
    category: `${noteCategory}`,
    content: `${noteContent}`,
    dates: `${noteDatesOfContent}`,
  };

  try {
    notes.push(newNotes);
    pushToStorage(notes, 'notes');

    form.reset();
    closeModal();

    noteRenderer(notes);
    countOfAllNotes(notes, archivedNotes);
  } catch {
    console.log('noteCreator Error');
  }
}
