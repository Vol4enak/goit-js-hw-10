import './css/styles.css';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

import { getFetch, clearHtml } from './fetchCountries';

const inputArea = document.querySelector('#search-box');
inputArea.addEventListener('input', debounce(zxc, DEBOUNCE_DELAY));

function zxc(e) {
  e.preventDefault();
  if (e.target.value.trim() === '') {
    clearHtml();
    return;
  }
  getFetch(e);
}
console.log(inputArea);
