import { CREATE_BOOKING, GET_BOOKINGS } from '../Actions/types';

const INITIAL_STATE = {
  bookings: [],
  booking: {},
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_BOOKING:
      return {
        ...state,
        bookings: [...state.bookings, action.booking],
        booking: action.booking,
      };
    case GET_BOOKINGS:
      return {
        ...state,
        bookings: action.bookings,
      };
    default:
      return state;
  }
};
