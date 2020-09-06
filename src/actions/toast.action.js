export const ACTIONS = {
    STATUS: 'toast/status',
  };
  
  export default function setToast(value) {
    return dispatch => {
      dispatch({ type: ACTIONS.STATUS, ...value });
    };
  }