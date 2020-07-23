import {
  ACTION_STARTED,
  ACTION_SUCCESS,
  ACTION_ERROR,
  CREATE_BOOKING,
  GET_BOOKINGS,
  GET_VOLUNTEER_BOOKINGS,
  CANCEL_STUDENT_BOOKINGS,
  CANCEL_VOLUNTEER_BOOKINGS,
  REMOVE_BOOKING_FROM_STATE,
  GET_STUDENT_BOOKINGS,
} from './types';
import httpClient from '../../common/httpClient';
import { getProfile } from '../../Auth/index';

export const createBooking = bookingData => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_BOOKING,
      });
      const booking = await httpClient.post(`/bookings`, {
        studentId: profile._id,
        ...bookingData,
      });
      dispatch({
        type: CREATE_BOOKING,
        booking: booking.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: You have successfully booked a session.',
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Something went wrong, could not book your details.',
        actionType: CREATE_BOOKING,
      });
    }
  };
};

export const getBookings = () => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_BOOKINGS,
      });
      const booking = await httpClient.get(`/bookings/${profile._id}`);
      dispatch({
        type: GET_BOOKINGS,
        booking: booking.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Something went wrong, please try again later.',
        actionType: GET_BOOKINGS,
      });
    }
  };
};

export const removeBooking = () => {
  return async dispatch => {
    dispatch({
      type: REMOVE_BOOKING_FROM_STATE,
    });
    window.location.replace('/categories');
  };
};

export const getStudentBookings = () => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_STUDENT_BOOKINGS,
      });
      const studentBookings = await httpClient.get(`/bookings/student/${profile._id}`);
      dispatch({
        type: GET_STUDENT_BOOKINGS,
        studentBookings: studentBookings.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Something went wrong, please try again later.',
        actionType: GET_STUDENT_BOOKINGS,
      });
    }
  };
};

export const getVolunteerBookings = () => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_VOLUNTEER_BOOKINGS,
      });
      const volunteerBookings = await httpClient.get(`/bookings/volunteer/${profile._id}`);
      dispatch({
        type: GET_VOLUNTEER_BOOKINGS,
        volunteerBookings: volunteerBookings.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Something went wrong, please try again later.',
        actionType: GET_VOLUNTEER_BOOKINGS,
      });
    }
  };
};
export const cancelStudentBookings = (id, text) => {
  return async dispatch => {
    const student = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CANCEL_STUDENT_BOOKINGS,
      });
      const studentBooking = await httpClient.put(`/bookings/student/cancel/${id}`, { student, text });
      dispatch({
        type: CANCEL_STUDENT_BOOKINGS,
        studentBooking: studentBooking.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: something went wrong, Could not cancel the booking',
        actionType: CANCEL_STUDENT_BOOKINGS,
      });
    }
  };
};

export const cancelVolunteerBookings = (id, text) => {
  return async dispatch => {
    const volunteer = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CANCEL_VOLUNTEER_BOOKINGS,
      });
      const volunteerBooking = await httpClient.put(`/bookings/volunteer/cancel/${id}`, { text, volunteer });
      dispatch({
        type: CANCEL_VOLUNTEER_BOOKINGS,
        volunteerBooking: volunteerBooking.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: something went wrong, Could not cancel the booking',
        actionType: CANCEL_VOLUNTEER_BOOKINGS,
      });
    }
  };
};
