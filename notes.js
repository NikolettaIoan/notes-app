let countId = 0; //is used to create an id

const ul = document.querySelector('.notes-list');
const userInput = document.querySelector('.user-input');
const addNoteButton = document.querySelector('.add-note');
const noteLi = document.querySelector('.note');
const date = document.querySelector('.date');
const time = document.querySelector('.time');

/**
 *
 * Get the day and hour
 */
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const month = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const d = new Date();
date.innerHTML = `${weekday[d.getDate()]}, ${d.getDate()} ${
  month[d.getMonth()]
} ${d.getFullYear()}`;
time.innerHTML = ` ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;

/**
 * A function to create a new li with two childs.
 * 1)A div that has input and label
 * 2)A button with a function that deletes the whole li element when clicked
 */
let createNote = function (text) {
  //Create Elements
  let li = document.createElement('li');
  let div = document.createElement('div');
  let input = document.createElement('input');
  let label = document.createElement('label');
  let button = document.createElement('button');

  //Change values and attributes
  li.id = countId;
  div.classList.add('item');
  input.setAttribute('type', 'checkbox');
  input.id = `item${countId}`;
  label.htmlFor = `item${countId}`;
  label.classList.add('label-checked');
  label.innerHTML = text;
  button.classList.add('remove-note');
  button.textContent = 'X';
  button.onclick = removeDiv;
  //Append them
  ul.appendChild(li);
  li.appendChild(div);
  li.appendChild(button);
  div.appendChild(input);
  div.appendChild(label);

  //Change the count
  countId++;
};

/**
 * Removes the parent div.
 * @param {*} e We need to bind it with the target element
 */

const removeDiv = function (e) {
  let child = e.target;
  child.parentElement.remove();
};

/**
 * We validate the user input and prevent empty notes
 * @param {*} text the user input
 */
const validateAndCreate = function (text) {
  let trimmedText = text.trim();
  if (trimmedText.length != 0) {
    createNote(trimmedText);
  } else {
    alert('The note is empty!');
  }
};

/**
 * When the 'add-note' button is clicked we get the value of the user input and create the new li. Then we clear the value of user input.
 */
addNoteButton.addEventListener('click', () => {
  let text = userInput.value;
  validateAndCreate(text);
  userInput.value = '';
});
