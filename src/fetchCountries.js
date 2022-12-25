import { Notify } from 'notiflix/build/notiflix-notify-aio';
const listOfcounries = document.querySelector('.country-list');
const InfoAboutCountrie = document.querySelector('.country-info');

const getFetch = function (e) {
  let countrieOfInput = e.target.value.trim();
  fetch(
    `https://restcountries.com/v3.1/name/${countrieOfInput}?fields=capital,population,languages,flags,name`
  )
    .then(response => {
      if (!response.ok) {
        Notify.failure('Oops, there is no country with that name');
      }
      return response.json();
    })
    .then(countrie => {
      if (countrieOfInput === '') {
        clearHtml();
      }
      if (countrie.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
      } else if (countrie.length >= 2 && countrie.length < 10) {
        renderCountriesList(countrie);
      } else {
        renderCountriesInfo(countrie);
      }
    });
};

function renderCountriesInfo(countrie) {
  clearHtml();
  countrie.map(({ name, capital, population, languages, flags }) => {
    const listEl = `
     <div class="countrie-flag">
    <img src="${flags.svg}" alt="${name.common}" width="50" height="50">
    <h1>${name.common}</h1>
    </div>
    <p>Capital: ${capital}</p>
    <p>Population: ${population}</p>
    <p>Languages: ${Object.values(languages)}</p>`;
    InfoAboutCountrie.insertAdjacentHTML('beforeend', listEl);
  });
}

function renderCountriesList(countrie) {
  clearHtml();
  countrie.map(({ name, flags }) => {
    const listEl = `
    <li class="country__item">
     
    <img src="${flags.svg}" alt="${name.common}" width="25" height="25">
     <h4>${name.common}</h4>
    </li>
    `;
    listOfcounries.insertAdjacentHTML('beforeend', listEl);
  });
}

function clearHtml() {
  InfoAboutCountrie.innerHTML = '';
  listOfcounries.innerHTML = '';
}

export { getFetch, clearHtml };
