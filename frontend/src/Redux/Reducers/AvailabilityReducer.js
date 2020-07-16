import { CREATE_AVAILABILITY } from '../Actions/types';

const INITIAL_STATE = {
  availabilities: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_AVAILABILITY:
      return {
        ...state,
        availabilities: [
            ...state.availabilities,
            action.availability
        ],
      };
    default:
      return state;
  }
};
