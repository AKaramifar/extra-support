import {
  CREATE_BOOKING,
  GET_BOOKINGS,
  REMOVE_BOOKING_FROM_STATE,
  GET_STUDENT_BOOKINGS,
  GET_VOLUNTEER_BOOKINGS,
  CANCEL_VOLUNTEER_BOOKINGS,
  CANCEL_STUDENT_BOOKINGS,
} from '../Actions/types';

const INITIAL_STATE = {
  bookings: [],
  booking: {},
  studentBookings: [],
  volunteerBookings: [],
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
    case GET_VOLUNTEER_BOOKINGS:
      return {
        ...state,
        volunteerBookings: action.volunteerBookings,
      };
    case CANCEL_STUDENT_BOOKINGS:
      return {
        ...state,
        studentBookings: state.studentBookings.map(studentBooking =>
          studentBooking._id === action.studentBookings.id ? action.studentBookings : studentBooking
        ),
      };
    case CANCEL_VOLUNTEER_BOOKINGS:
      return {
        ...state,
        volunteerBookings: state.volunteerBookings.map(volunteerBooking =>
          volunteerBooking._id === action.volunteerBookings.id ? action.volunteerBookings : volunteerBooking
        ),
      };
    default:
      return state;
  }
};
