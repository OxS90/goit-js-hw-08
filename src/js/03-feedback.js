const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const submitButton = feedbackForm.querySelector('button');

const saveToLocalStorage = () => {
  const objToSave = { email: emailInput.value, message: messageInput.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(objToSave));
};

const loadFromLocalStorage = () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const savedObject = JSON.parse(savedData);
    emailInput.value = savedObject.email;
    messageInput.value = savedObject.message;
  }
};

feedbackForm.addEventListener('input', () => {
  saveToLocalStorage();
});

window.addEventListener('load', () => {
  loadFromLocalStorage();
});

submitButton.addEventListener('click', event => {
  event.preventDefault();
  localStorage.removeItem('feedback-form-state');
  console.log('email:', emailInput.value);
  console.log('message:', messageInput.value);
  feedbackForm.reset();
});
