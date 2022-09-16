import notes from './notes.json';

import {
  nameValidation,
  contentValidation,
  dateLengthValidation,
} from './contentValidationFunctions';

const markUp = `<button class='note-bttn edit-bttn'></button><button class='note-bttn archive-bttn'></button><button class='note-bttn delete-bttn'></button>`;
const secoundMarkUp = `<button class='note-bttn unarchive-bttn'></button><button class='note-bttn delete-bttn'></button>`;

const noteTableTbody = document.querySelector('.note-table-tbody');

function noteRenderer(notes, tbody = noteTableTbody) {
  tbody.innerHTML = '';
  if (notes.length === 0) {
    return;
  }

  for (let i = 0; i < notes.length; i++) {
    el = notes[i];

    let row = tbody.insertRow(-1);
    row.dataset.id = el.id;

    if (el.category === 'Idea') {
      row.insertCell(
        0
      ).innerHTML = `<div class="td-alight"><span class="idea-icon icon"></span><p>${nameValidation(
        el.name
      )}</p></div>`;
    }

    if (el.category === 'Random Thought') {
      row.insertCell(
        0
      ).innerHTML = `<div class="td-alight"><span class="thought-icon icon"></span><p>${nameValidation(
        el.name
      )}</p></div>`;
    }

    if (el.category === 'Task') {
      row.insertCell(
        0
      ).innerHTML = `<div class="td-alight"><span class="task-icon icon"></span><p>${nameValidation(
        el.name
      )}</p></div>`;
    }

    row.insertCell(1).innerHTML = el.created;
    row.insertCell(2).innerHTML = el.category;
    row.insertCell(3).innerHTML = contentValidation(el.content);
    row.insertCell(4).innerHTML = dateLengthValidation(el.dates);

    if (tbody !== noteTableTbody) {
      row.insertCell(5).innerHTML = secoundMarkUp;
    } else {
      row.insertCell(5).innerHTML = markUp;
    }
  }
}

try {
  noteRenderer(notes);
} catch (e) {
  console.log(error.message);
}

export default noteRenderer;
