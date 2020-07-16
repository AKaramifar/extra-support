import { GET_CATEGORIES, CREATE_CATEGORY } from '../Actions/types';
const INITIAL_STATE = {
  categories: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_CATEGORIES:
      return {
        ...state,
        categories: action.categories,
      };

    case CREATE_CATEGORY:
      return {
        ...state,
        categories: [...state.categories, action.category],
      };
    default:
      return state;
  }
};
