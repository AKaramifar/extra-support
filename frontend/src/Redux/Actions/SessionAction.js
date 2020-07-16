import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, CREATE_SESSION } from './types';
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
        volunteerId: profile._id,
        ...sessionData,
      });
      dispatch({
        type: CREATE_SESSION,
        session: session.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
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
