import {
  ACTION_STARTED,
  ACTION_SUCCESS,
  ACTION_ERROR,
  REMOVE_STATE_ERROR,
  USER_SIGN_UP,
  USER_LOGIN,
  LOAD_USER,
  REMOVE_STATE_MESSAGE,
} from './types';
import httpClient from '../../common/httpClient'
import { setToken, getProfile, loggedIn, logout } from '../../Auth/index';

export const loadUser = () => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: LOAD_USER,
      });
      const user = await httpClient.get(`/users/${profile._id}`);
      const isLoggedIn = await loggedIn();
      dispatch({
        type: LOAD_USER,
        user: user.data,
        loggedIn: isLoggedIn,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Make sure you are logged in!!',
        actionType: LOAD_USER,
      });
    }
  };
};

export const onLogOut = () => {
  return async dispatch => {
    await logout();
    dispatch({
      type: LOAD_USER,
      user: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
      },
      loggedIn: false,
    });
  };
};

export const userSignUp = user => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: USER_SIGN_UP,
      });
      console.log("hello")
      const userResponse = await httpClient.post('/auth/register', user);
      console.log(userResponse)
      if (userResponse.status === 200) {
        dispatch({
          type: USER_SIGN_UP,
          user: userResponse.data.user,
          loggedIn: true,
        });
        dispatch({
          type: ACTION_SUCCESS,
        });
        setToken(userResponse.data.token);
      } else {
        throw new Error('');
      }
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error:
          error.response && error.response.data && typeof error.response.data === 'string'
            ? error.response.data
            : 'Server is not available, please try again later.',
        actionType: USER_SIGN_UP,
      });
    }
  };
};

export const userLogin = user => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: USER_LOGIN,
      });
      const userResponse = await httpClient.post('/auth/login', user);
      if (userResponse.status === 200) {
        dispatch({
          type: USER_LOGIN,
          user: userResponse.data.user,
          loggedIn: true,
        });
        dispatch({
          type: ACTION_SUCCESS,
        });
        setToken(userResponse.data.token);
      } else {
        throw new Error('');
      }
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error:
          error.response && error.response.data && typeof error.response.data === 'string'
            ? error.response.data
            : 'Server is not available, please try again later.',
        actionType: USER_LOGIN,
      });
    }
  };
};

export const removeStateError = id => {
  return async dispatch => {
    dispatch({
      type: REMOVE_STATE_ERROR,
      id,
    });
  };
};

export const removeMessage = id => {
  return async dispatch => {
    dispatch({
      type: REMOVE_STATE_MESSAGE,
      id,
    });
  };
};
