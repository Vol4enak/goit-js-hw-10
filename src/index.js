import './css/styles.css';
const debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

import { getFetch, clearHtml } from './fetchCountries';

const inputArea = document.querySelector('#search-box');
inputArea.addEventListener('input', debounce(countrieFinder, DEBOUNCE_DELAY));

function countrieFinder(e) {
  e.preventDefault();
  const query = e.target.value.trim();
  if (!query.length) {
    clearHtml();
    return;
  }
  getFetch(query);
}
