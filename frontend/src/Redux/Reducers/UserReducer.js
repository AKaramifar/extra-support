import {
  LOAD_USER,
  USER_SIGN_UP,
  USER_LOGIN,
} from "../Actions/types";
const INITIAL_STATE = {
  user: {
    id: "",
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    tel: '',
    gender: '',
    isAsylumSeekerOrRefugee: '',
    cyfStudent: '',
  },
  loggedIn: false,
};

export default (state = INITIAL_STATE, action) => {

  console.log(action)
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.user,
        loggedIn: action.loggedIn,
      };
    case USER_SIGN_UP:
      return {
        ...state,
        user: action.user,
        loggedIn: action.loggedIn,
      };
    case USER_LOGIN:
      return {
        ...state,
        user: action.user,
        loggedIn: action.loggedIn,
      };
    default:
      return state;
  }
};
