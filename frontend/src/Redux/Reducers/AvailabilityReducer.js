import { CREATE_AVAILABILITY, GET_AVAILABILITY, EDIT_AVAILABILITY } from '../Actions/types';

const INITIAL_STATE = {
  availabilities: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_AVAILABILITY:
      return {
        ...state,
        availabilities: [...state.availabilities, action.availability],
      };
    case EDIT_AVAILABILITY:
      return {
        ...state,
        availabilities: [...state.availabilities, action.availability],
      };
    case GET_AVAILABILITY:
      return {
        ...state,
        availabilities: action.availabilities,
      };
    default:
      return state;
  }
};
