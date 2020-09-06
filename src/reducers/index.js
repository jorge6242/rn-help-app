import {
    combineReducers
  } from 'redux';

  import genderReducer from './genderReducer';
  import loginReducer from './login.reducer';
  import toastReducer from './toast.reducer';

  const rootReducer = combineReducers({
    genderReducer,
    loginReducer,
    toastReducer
  });
  
  export default rootReducer;