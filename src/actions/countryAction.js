import { GET_COUNTRY } from '../types/countryData';

export const getCountryAction = (data) => (dispatch) => {
  dispatch({
    type: GET_COUNTRY,
    payload: data
  })
}