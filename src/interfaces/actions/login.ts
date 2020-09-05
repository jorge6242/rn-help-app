export const ACTIONS = {
    SET_USER: 'login/set_user',
    LOGOUT: 'login/logout',
    LOADING: 'login/loading',
};
  
  interface SetUser {
    type: typeof ACTIONS.SET_USER
    payload: Array<string|number>
  }
  
  interface Logout {
    type: typeof ACTIONS.LOGOUT
    payload: any
  }
  
  interface Loading {
    type: typeof ACTIONS.LOADING
    payload: boolean
  }
  
  
  export type ActionTypes = SetUser | Logout | Loading