/* 
base url https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/{namespace}

 */

import FetchWrapper from './fetch-wrapper.js';

const API = new FetchWrapper(
  'https://firestore.googleapis.com/v1/projects/jsdemo-3f387/databases/(default)/documents/suntala'
);

const form = document.querySelector('#create-form');
const nameSelect = document.querySelector('#create-name');
const carbsInput = document.querySelector('#create-carbs');
const proteinInput = document.querySelector('#create-protein');
const fatInput = document.querySelector('#create-fat');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log('Form submitted');

  API.post('/', {
    fields: {
      name: { stringValue: nameSelect.value },
      carbs: { integerValue: carbsInput.value },
      protein: { integerValue: proteinInput.value },
      fat: { integerValue: fatInput.value },
    },
  }).then((data) => {
    console.log(data);
    if (data.error) {
      // there was an error
      return;
    }
    nameSelect.value = '';
    carbsInput.value = '';
    proteinInput.value = '';
    fatInput.value = '';
  });
});
