import { CREATE_BOOKING, GET_BOOKINGS, REMOVE_BOOKING_FROM_STATE, GET_STUDENT_BOOKINGS } from '../Actions/types';

const INITIAL_STATE = {
  bookings: [],
  booking: {},
  studentBookings:[],
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
      case GET_STUDENT_BOOKINGS:
      return {
        ...state,
        studentBookings: action.studentBookings,
      };
    case REMOVE_BOOKING_FROM_STATE:
      return {
        ...state,
        booking: {},
      };
    default:
      return state;
  }
};
