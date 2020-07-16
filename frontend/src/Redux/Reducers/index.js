import { combineReducers } from 'redux';
import user from './UserReducer';
import ActionController from './ActionControllerReducer';
import Sessions from './SessionsReducer';
import avalability from './AvalabilityReducer';
import categories from './CategoryReducer';
import sessions from './SessionReducer';
export default combineReducers({
  categories,
  sessions, 
  Sessions,
  avalability,
  user,
  ActionController,
});
