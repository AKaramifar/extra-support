import { CREATE_AVALABILITY } from '../Actions/types';
const INITIAL_STATE = {
  avalabilities: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_AVALABILITY:
      return {
        ...state,
        avalabilities: [
            ...state.avalabilities,
            action.avalability
        ],
      };
    default:
      return state;
  }
};
