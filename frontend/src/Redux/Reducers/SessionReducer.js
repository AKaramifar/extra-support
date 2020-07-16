import { GET_SESSIONS, CREATE_SESSION } from '../Actions/types';
const INITIAL_STATE = {
  sessions: [],
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
    default:
      return state;
  }
};
