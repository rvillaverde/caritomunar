import { 
  USER_LOGGED_IN,
  USER_LOGGED_OUT
 } from '../types/auth'

const INITIAL_STATE = {
  user: {},
}

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        user: action.user,
        token: action.token
      }
      
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        token: undefined
      }

    default:
      return state;
  }
};

export default userReducer;