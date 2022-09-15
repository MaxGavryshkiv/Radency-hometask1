function countOfSameCategoryNotes(arr) {
  let countOfIdeas = 0;
  let countOfTasks = 0;
  let countOfThoughts = 0;

  arr.forEach(el => {
    if (el.category === 'Idea') {
      countOfIdeas += 1;
    }
    if (el.category === 'Task') {
      countOfTasks += 1;
    }
    if (el.category === 'Random Thought') {
      countOfThoughts += 1;
    }
  });

  return [
    { name: 'Idea', quantity: countOfIdeas },
    { name: 'Task', quantity: countOfTasks },
    { name: 'Random Thought', quantity: countOfThoughts },
  ];
}

export default countOfSameCategoryNotes;
