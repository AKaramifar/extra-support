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
        error: 'could not book booking',
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
        error: 'Error: Could not get booking',
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
        error: 'Error: Could not get student bookings',
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
        error: 'Error: Could not get volunteer bookings',
        actionType: GET_VOLUNTEER_BOOKINGS,
      });
    }
  };
};
export const cancelStudentBookings = id => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CANCEL_STUDENT_BOOKINGS,
      });
      const studentBookings = await httpClient.put(`/bookings/student/${id}`);
      dispatch({
        type: CANCEL_STUDENT_BOOKINGS,
        studentBookings: studentBookings.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Could not cancel student bookings',
        actionType: CANCEL_STUDENT_BOOKINGS,
      });
    }
  };
};

export const cancelVolunteerBookings = id => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CANCEL_VOLUNTEER_BOOKINGS,
      });
      const volunteerBookings = await httpClient.put(`/bookings/volunteer/${id}`);
      dispatch({
        type: CANCEL_VOLUNTEER_BOOKINGS,
        volunteerBookings: volunteerBookings.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Could not cancel volunteer bookings',
        actionType: CANCEL_VOLUNTEER_BOOKINGS,
      });
    }
  };
};
