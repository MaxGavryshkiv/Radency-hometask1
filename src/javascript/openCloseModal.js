import fillingOutForm from './fillingOutForm';

const onpenBttn = document.querySelector('.note-open-modal');
const closeBttn = document.querySelector('.modal-close');

const modal = document.querySelector('[data-modal]');

function closeModal() {
  modal.classList.add('is-hidden');
}

function openModal() {
  modal.classList.remove('is-hidden');
}

function openEditModal(obj) {
  modal.classList.remove('is-hidden');
  fillingOutForm(obj);
}

onpenBttn.addEventListener('click', openModal);
closeBttn.addEventListener('click', closeModal);

export { openModal, closeModal, openEditModal };
