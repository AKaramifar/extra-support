import {
  ACTION_STARTED,
  ACTION_SUCCESS,
  ACTION_ERROR,
  CREATE_SESSION,
  GET_VOLUNTEER_SESSIONS,
  GET_SESSIONS,
  GET_SESSION,
} from './types';
import httpClient from '../../common/httpClient';
import { getProfile } from '../../Auth/index';

export const createSession = sessionData => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_SESSION,
      });
      const session = await httpClient.post(`/sessions`, {
        ...sessionData,
        volunteerId: profile._id,
      });
      dispatch({
        type: CREATE_SESSION,
        session: session.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: session created.',
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: ACTION_ERROR,
        error: 'could not create session',
        actionType: CREATE_SESSION,
      });
    }
  };
};

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

export const getSessions = params => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_SESSIONS,
      });
      const sessions = await httpClient.get(`/sessions`, {
        params,
      });
      dispatch({
        type: GET_SESSIONS,
        sessions: sessions.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not get sessions',
        actionType: GET_SESSIONS,
      });
    }
  };
};

export const getSession = sessionId => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_SESSION,
      });
      const session = await httpClient.get(`/sessions/session/${sessionId}`);
      dispatch({
        type: GET_SESSION,
        session: session.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not get session',
        actionType: GET_SESSION,
      });
    }
  };
};

export const editSession = (id, sessionData) => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_SESSION,
      });
      const session = await httpClient.put(`/sessions/${id}`, sessionData);
      dispatch({
        type: CREATE_SESSION,
        session: session.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: session updated.',
      });
      setTimeout(() => {
        window.location.replace('/volunteer/sessions');
      }, 2000);
    } catch (error) {
      console.log(error);
      dispatch({
        type: ACTION_ERROR,
        error: 'could not create session',
        actionType: CREATE_SESSION,
      });
    }
  };
};
