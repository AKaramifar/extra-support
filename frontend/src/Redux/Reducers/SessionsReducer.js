import { GET_VOLUNTEER_SESSIONS } from '../Actions/types';
const INITIAL_STATE = {
  volunteerSessions: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_VOLUNTEER_SESSIONS:
      return {
        ...state,
        volunteerSessions: action.volunteerSessions,
      };
    default:
      return state;
  }
};
