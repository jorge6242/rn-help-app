import {
    combineReducers
  } from 'redux';

  import genderReducer from './genderReducer';
  import loginReducer from './login.reducer';

  const rootReducer = combineReducers({
    genderReducer,
    loginReducer,
  });
  
  export default rootReducer;