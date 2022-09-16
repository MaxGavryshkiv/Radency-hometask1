import notes from './notes';

import { closeModal } from './openCloseModal';
import dateValidation from './dateValidation';
import noteRenderer from './noteRenderer';
import counterOfAllNotes from './countOfAllNotes';

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
    notes.splice(indexOfNote, 1, editNotes);

    form.classList.replace('edit-form', 'form');
    form.reset();
    closeModal();

    noteRenderer(notes);
    counterOfAllNotes();

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

  notes.push(newNotes);

  form.reset();
  closeModal();

  noteRenderer(notes);
  counterOfAllNotes();
}
