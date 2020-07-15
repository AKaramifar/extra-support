import { GET_SESSION_CATEGORIES } from '../Actions/types';
const INITIAL_STATE = {
  sessionCategories: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SESSION_CATEGORIES:
      return {
        ...state,
        sessionCategories: action.sessionCategories,
      };
    default:
      return state;
  }
};
