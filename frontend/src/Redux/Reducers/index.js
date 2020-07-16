import { combineReducers } from 'redux';
import user from './UserReducer';
import ActionController from './ActionControllerReducer';
import categories from './CategoryReducer';
import sessions from './SessionReducer';
export default combineReducers({
  categories,
  sessions,
  user,
  ActionController,
});
