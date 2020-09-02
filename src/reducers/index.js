import {
    combineReducers
  } from 'redux';

  import genderReducer from './genderReducer';
  const rootReducer = combineReducers({
    genderReducer,
  });
  
  export default rootReducer;