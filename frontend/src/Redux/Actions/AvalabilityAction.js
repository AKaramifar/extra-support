import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, CREATE_AVAILABILITY, GET_AVAILABILITY } from './types';
import httpClient from '../../common/httpClient';
import { getProfile } from '../../Auth/index';

export const createAvailability = availabilityData => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_AVAILABILITY,
      });
      const availability = await httpClient.post(`/availabilities`, {
        volunteerId: profile._id,
        ...availabilityData,
      });
      dispatch({
        type: CREATE_AVAILABILITY,
        availability: availability.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: availability created.'
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not create availability',
        actionType: CREATE_AVAILABILITY,
      });
    }
  };
};


export const getAvailabilities = () => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_AVAILABILITY,
      });
      const availabilities = await httpClient.get(`/availabilities`);
      dispatch({
        type: GET_AVAILABILITY,
        availabilities: availabilities.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Could not get availabilities',
        actionType: GET_AVAILABILITY,
      });
    }
  };
};
