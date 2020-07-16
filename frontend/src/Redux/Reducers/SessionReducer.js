import { GET_SESSIONS, CREATE_SESSION, GET_VOLUNTEER_SESSIONS  } from '../Actions/types';
const INITIAL_STATE = {
  sessions: [],
  volunteerSessions: [],
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_SESSIONS:
      return {
        ...state,
        sessions: action.sessions,
      };
    case CREATE_SESSION:
      return {
        ...state,
        sessions: [...state.sessions, action.session],
      };
    case GET_VOLUNTEER_SESSIONS:
      return {
        ...state,
        volunteerSessions: action.volunteerSessions,
      };
    default:
      return state;
  }
};
