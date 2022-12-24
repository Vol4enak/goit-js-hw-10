import './css/styles.css';

const DEBOUNCE_DELAY = 300;

// ,capital,,population,languages
fetch(
  'https://restcountries.com/v3.1/name/peru?fields=capital,population,languages,flags'
)
  .then(response => {
    console.log(response.json);

    return response.json();
  })
  .then(countrie => {
    console.log(countrie);
  });
  