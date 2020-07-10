import { GET_COUNTRIES, SET_COUNTRY, FILTER_COUNTRIES, SET_CONTINENT } from '../types/countriesTypes';

export const getCountriesAction = (data) => (dispatch) => {
  dispatch({
    type: GET_COUNTRIES,
    payload: data
  })
}

export const setCountryAction = (data) => (dispatch) => {
  dispatch({
    type: SET_COUNTRY,
    payload: data
  })
}

export const setFilteredCountriesAction = (data) => (dispatch) => {
  dispatch({
    type: FILTER_COUNTRIES,
    payload: data
  })
}

export const setContinentAction = (data) => (dispatch) => {
  dispatch({
    type: SET_CONTINENT,
    payload: data
  })
}