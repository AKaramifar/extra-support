import {
  ACTION_STARTED,
  ACTION_SUCCESS,
  ACTION_ERROR,
  REMOVE_STATE_ERROR,
  REMOVE_STATE_MESSAGE,
} from "../Actions/types";

const INITIAL_STATE = {
  actionType: "",
  errors: [],
  messages: [],
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  const date = new Date();
  switch (action.type) {
    case ACTION_STARTED:
      return {
        ...state,
        actionType: action.actionType,
        isLoading: true,
      };
    case ACTION_SUCCESS:
      return {
        ...state,
        actionType: "",
        isLoading: false,
        messages: action.message
          ? state.messages.length > 1
            ? [
                ...state.messages.filter((msg, i) => i !== 0),
                { message: action.message, id: date.getTime() },
              ]
            : [
                ...state.messages,
                { message: action.message, id: date.getTime() },
              ]
          : state.messages,
      };
    case ACTION_ERROR:
      return {
        ...state,
        actionType: action.actionType,
        isLoading: false,
        errors:
          state.errors.length > 1
            ? [
                ...state.errors.filter((err, i) => i !== 0),
                { error: action.error, id: date.getTime() },
              ]
            : [...state.errors, { error: action.error, id: date.getTime() }],
      };

    case REMOVE_STATE_ERROR:
      return {
        ...state,
        errors: state.errors.filter((error) => error.id !== action.id),
      };
    case REMOVE_STATE_MESSAGE:
      return {
        ...state,
        messages: state.messages.filter((message) => message.id !== action.id),
      };
    default:
      return state;
  }
};
