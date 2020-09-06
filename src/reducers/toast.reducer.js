import { ACTIONS } from '../actions/toast.action';

const initialState = {
  status: false,
  message: '',
  type: '',
};

const toastReducer = (state = initialState , action) => {
  switch (action.type) {
    case ACTIONS.STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default toastReducer;