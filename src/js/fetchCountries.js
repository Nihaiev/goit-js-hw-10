const SEARCH_URL = 'https://restcountries.com/v3.1/name';

const fetchCountries = name => {
  return fetch(
    `${SEARCH_URL}/${name}?fields=name,capital,population,flags,languages`
  ).then(response => {
    if (response.status === 404) {
      return Promise.reject(new Error());
    }
    return response.json();
  });
};

export { fetchCountries };
