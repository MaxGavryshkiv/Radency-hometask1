const onpenBttn = document.querySelector('.note-open-modal');
const closeBttn = document.querySelector('.modal-close');

const modal = document.querySelector('[data-modal]');

const form = document.querySelector('.form');

function closeModal() {
  modal.classList.add('is-hidden');
  form.reset();
  if (form.classList.contains('edit-form')) {
    form.classList.replace('edit-form', 'form');
  }
}

function openModal() {
  modal.classList.remove('is-hidden');
}

function openEditModal(obj) {
  modal.classList.remove('is-hidden');
  form.elements.noteName.value = obj.name;
  form.elements.noteCategory.value = obj.category;
  form.elements.noteContent.value = obj.content;
  form.elements.noteName.dataset.id = obj.id;
  form.elements.noteName.dataset.dateOfCreation = obj.created;

  form.classList.replace('form', 'edit-form');
}

onpenBttn.addEventListener('click', openModal);
closeBttn.addEventListener('click', closeModal);

export { openModal, closeModal, openEditModal };
