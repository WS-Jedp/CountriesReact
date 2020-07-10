import { combineReducers } from 'redux';

// Reducer
import countriesReducer from './countriesReducer';
import countryReducer from './countryReducer';

export default combineReducers({
  countriesReducer,
  countryReducer,
});
