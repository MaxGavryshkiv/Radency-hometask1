const archiveCounterTableBody = document.querySelector(
  '.note-counter-table-tbody'
);

function countOfNotesRenderer(notes, archivedNotes) {
  for (let i = 0; i < notes.length; i++) {
    el = notes[i];
    archEl = archivedNotes[i];
    if (el.name === archEl.name) {
      if (el.quantity === 0 && archEl === 0) {
        return;
      }

      let row = archiveCounterTableBody.insertRow(-1);

      if (el.name === 'Idea') {
        row.insertCell(
          0
        ).innerHTML = `<div class="td-alight"><span class="idea-icon icon"></span><p>${el.name}</p></div>`;
      }
      if (el.name === 'Task') {
        row.insertCell(
          0
        ).innerHTML = `<div class="td-alight"><span class="task-icon icon"></span><p>${el.name}</p></div>`;
      }
      if (el.name === 'Random Thought') {
        row.insertCell(
          0
        ).innerHTML = `<div class="td-alight"><span class="thought-icon icon"></span><p>${el.name}</p></div>`;
      }

      row.insertCell(1).innerHTML = el.quantity;
      row.insertCell(2).innerHTML = archEl.quantity;
    }
  }
}

export default countOfNotesRenderer;
