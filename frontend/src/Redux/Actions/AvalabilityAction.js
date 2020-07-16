import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, GET_VOLUNTEER_SESSIONS, CREATE_AVALABILITY } from './types';
import httpClient from '../../common/httpClient';
import { getProfile } from '../../Auth/index';

export const getVolunteerSessions = () => {
  return async dispatch => {
    const profile = getProfile();

    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_VOLUNTEER_SESSIONS,
      });
      const volunteerSessions = await httpClient.get(`/sessions/${profile._id}`);
      dispatch({
        type: GET_VOLUNTEER_SESSIONS,
        volunteerSessions: volunteerSessions.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not get sessions',
        actionType: GET_VOLUNTEER_SESSIONS,
      });
    }
  };
};

export const createAvalability = avalabilityData => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_AVALABILITY,
      });
      const avalability = await httpClient.post(`/avalability`, {
        volunteerId: profile._id,
        ...avalabilityData,
      });

      dispatch({
        type: CREATE_AVALABILITY,
        avalability: avalability.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not create avalability',
        actionType: CREATE_AVALABILITY,
      });
    }
  };
};
