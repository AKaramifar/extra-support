import {
  ACTION_STARTED,
  ACTION_SUCCESS,
  ACTION_ERROR,
  CREATE_AVAILABILITY,
  GET_AVAILABILITY,
  EDIT_AVAILABILITY,
  UPDATE_ROUTE
} from './types';
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
        message: 'Success: availability created.',
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: could not save your availability, please try again later',
        actionType: CREATE_AVAILABILITY,
      });
    }
  };
};

export const getAvailabilities = () => {
  return async dispatch => {
    try {
      const profile = getProfile();
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_AVAILABILITY,
      });
      const availabilities = await httpClient.get(`/availabilities/${profile._id}`);
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
        error: 'Error: something went wrong, please try again later.',
        actionType: GET_AVAILABILITY,
      });
    }
  };
};

export const editAvailability = (id, availabilityData) => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: EDIT_AVAILABILITY,
      });
      const availability = await httpClient.put(`/availabilities/${id}`, {
        volunteerId: profile._id,
        ...availabilityData,
      });
      dispatch({
        type: EDIT_AVAILABILITY,
        availability: availability.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: availability updated.',
      });
      setTimeout(() => {
        window.location.replace('/volunteer/availabilities');
      }, 2000);
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: could not update your availability, please try again later.',
        actionType: EDIT_AVAILABILITY,
      });
    }
  };
};

export const onChangeRout = (pathName)=>{
  return async dispatch => {
      dispatch({
        type: UPDATE_ROUTE,
        pathName
      });
  };
}