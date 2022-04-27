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
const foodList = document.querySelector('#food-list');

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

    // Add new food to the list
    foodList.insertAdjacentHTML(
      'beforeend',
      `<li class="card">
  <div>
    <h3 class="name">${nameSelect.value}</h3>
    <div class="calories">0 calories</div>
    <ul class="macros">
      <li class="carbs"><div>Carbs</div><div class="value">${carbsInput.value}g</div></li>
      <li class="protein"><div>Protein</div><div class="value">${proteinInput.value}g</div></li>
      <li class="fat"><div>Fat</div><div class="value">${fatInput.value}g</div></li>
    </ul>
  </div>
</li>`
    );

    nameSelect.value = '';
    carbsInput.value = '';
    proteinInput.value = '';
    fatInput.value = '';
  });
});
