import throttle from 'lodash.throttle';

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form');
const input = document.querySelector('.feedback-form input');
const textarea = document.querySelector('.feedback-form textarea');
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInputs, 500));

savedInputs();

function onFormSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function onFormInputs(event) {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function savedInputs() {
    const savedFormData = localStorage.getItem(STORAGE_KEY);
    if (savedFormData) {
        const parsedFormData = JSON.parse(savedFormData);
        input.value = parsedFormData.email;
        textarea.value = parsedFormData.message;
    }
}