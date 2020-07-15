import { combineReducers } from 'redux';
import user from './UserReducer';
import ActionController from './ActionControllerReducer';
import categories from './CategoryReducer';
export default combineReducers({
  categories,
  user,
  ActionController,
});
