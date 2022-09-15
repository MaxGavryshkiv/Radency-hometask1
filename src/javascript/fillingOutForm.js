const form = document.querySelector('.form');
function fillingOutForm(obj) {
  form.elements.noteName.value = obj.name;
  form.elements.noteCategory.value = obj.category;
  form.elements.noteContent.value = obj.content;
  form.elements.noteName.dataset.id = obj.id;
  form.elements.noteName.dataset.dateOfCreation = obj.created;

  form.classList.replace('form', 'edit-form');
}
export default fillingOutForm;
