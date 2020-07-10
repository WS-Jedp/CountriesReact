import { FILTER_COUNTRIES, GET_COUNTRIES, GET_COUNTRY, SET_CONTINENT, SET_COUNTRY } from '../types/countriesTypes';

const INITIAL_STATE = {
  countries: [],
  filteredCountries: [],
  country: /[a-zA-Z]{1,}/,
  continent: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {...state, countries: action.payload}
      break;
    case FILTER_COUNTRIES:
      return {...state, filteredCountries: action.payload}
      break;
    case SET_COUNTRY:
      return {...state, country: action.payload}
      break;
    case SET_CONTINENT:
      return {...state, continent: action.payload}
    default:
      return {...state}
      break;
  }
}