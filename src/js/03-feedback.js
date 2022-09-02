let throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('[name = email]');
const messageInput = document.querySelector('[name = message]');

form.addEventListener('input', throttle(saveInput, 500));
form.addEventListener('submit', submitForm);

const saveData = {};

function saveInput(e) {
  if (e.target.name === 'email') {
    saveData.email = e.target.value;
  }

  if (e.target.name === 'message') {
    saveData.message = e.target.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
}

function submitForm(ev) {
  ev.preventDefault();

  console.log(saveData);

  ev.target.reset();
  localStorage.removeItem('feedback-form-state');
}

const feedbackData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (feedbackData?.email) {
  emailInput.value = feedbackData.email;
}
if (feedbackData?.message) {
  messageInput.value = feedbackData.message;
}
