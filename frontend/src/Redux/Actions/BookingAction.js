import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, CREATE_BOOKING, GET_BOOKINGS, REMOVE_BOOKING_FROM_STATE } from './types';
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
        message: 'Success: You have successfully booked a session.'
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
      window.location.replace('/categories')
  };
};