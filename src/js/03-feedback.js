let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name = email]');
const messageInput = document.querySelector('[name = message]');

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', submitForm);

let saveData = {};

returnSaveValue();

function saveInput(e) {
  saveData[e.target.name] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function submitForm(ev) {
  ev.preventDefault();

  console.log(saveData);
  saveData = {};

  ev.target.reset();
  localStorage.removeItem('feedback-form-state');
}

function returnSaveValue() {
  const feedbackData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (feedbackData?.email) {
    emailInput.value = feedbackData.email;
  }
  if (feedbackData?.message) {
    messageInput.value = feedbackData.message;
  }

  if (feedbackData) {
    saveData = feedbackData;
  }
}
