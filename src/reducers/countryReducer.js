import { GET_COUNTRY } from '../types/countryData'; 

const INITIAL_STATE ={
  countryData: [],
}

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case GET_COUNTRY:
      return {...state, countryData: action.payload}
      break;
  
    default:
      return {...state}
      break;
  }
}

