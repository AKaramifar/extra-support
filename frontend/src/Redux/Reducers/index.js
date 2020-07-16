import { combineReducers } from 'redux';
import user from './UserReducer';
import ActionController from './ActionControllerReducer';
import Sessions from './SessionsReducer';
import avalability from './AvalabilityReducer';

export default combineReducers({
  Sessions,
  avalability,
  user,
  ActionController,
});
