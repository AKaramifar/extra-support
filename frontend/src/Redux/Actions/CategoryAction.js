import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, GET_SESSION_CATEGORIES } from './types';
import httpClient from '../../common/httpClient';
import { getProfile, loggedIn } from '../../Auth/index';
export const getSessionCategories = () => {
  return async dispatch => {
    const profile = getProfile();
     ;
    try {
      dispatch({
        type: ACTION_STARTED, 
        actionType: GET_SESSION_CATEGORIES,
      });
      const sessionCategories = await httpClient.get(`/categories/${profile._id}`);
      const isLoggedIn = await loggedIn();
      dispatch({
        type: GET_SESSION_CATEGORIES,
        sessionCategories: sessionCategories.data,
        loggedIn: isLoggedIn,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'could not get categories',
        actionType: GET_SESSION_CATEGORIES,
      });
    }
  };
};
