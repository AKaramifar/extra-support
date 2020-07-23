import { ACTION_STARTED, ACTION_SUCCESS, ACTION_ERROR, GET_CATEGORIES, CREATE_CATEGORY } from './types';
import httpClient from '../../common/httpClient';
import { getProfile } from '../../Auth/index';
export const getCategories = () => {
  return async dispatch => {
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: GET_CATEGORIES,
      });
      const categories = await httpClient.get(`/categories`);

      dispatch({
        type: GET_CATEGORIES,
        categories: categories.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: Something went wrong, please try again later.',
        actionType: GET_CATEGORIES,
      });
    }
  };
};

export const createCategory = categoryData => {
  return async dispatch => {
    const profile = getProfile();
    try {
      dispatch({
        type: ACTION_STARTED,
        actionType: CREATE_CATEGORY,
      });
      const category = await httpClient.post(`/categories`, {
        volunteerId: profile._id,
        ...categoryData,
      });
      dispatch({
        type: CREATE_CATEGORY,
        category: category.data,
      });
      dispatch({
        type: ACTION_SUCCESS,
        message: 'Success: category created.'
      });
    } catch (error) {
      dispatch({
        type: ACTION_ERROR,
        error: 'Error: could not create category, please try again later.',
        actionType: CREATE_CATEGORY,
      });
    }
  };
};
