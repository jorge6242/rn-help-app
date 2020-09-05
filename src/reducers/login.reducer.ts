import {  ACTIONS, ActionTypes } from '../interfaces/actions/login';
import { AsyncStorage } from 'react-native';

type LoginInitialState = {
  user: object;
  status: boolean;
  loading: boolean;
}

const initialState: LoginInitialState = {
  user: {
    username: "",
    email: "",
    age: 0
  },
  status: false,
  loading: false
};

const loginReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ACTIONS.SET_USER:
      return {
        ...state,
        user: action.payload,
        status: true
      };
    case ACTIONS.LOGOUT:
        AsyncStorage.removeItem("token");
      //window.location.href = '/';
      return {
        ...state,
        ...initialState
      };
    case ACTIONS.LOADING:
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default loginReducer;
