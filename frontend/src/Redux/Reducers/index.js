import { combineReducers } from 'redux';
import user from './UserReducer';
import ActionController from './ActionControllerReducer';
import availability from './AvailabilityReducer';
import categories from './CategoryReducer';
import sessions from './SessionReducer';
import bookings from './BookingReducer';
export default combineReducers({
  categories,
  sessions, 
  availability,
  user,
  ActionController,
  bookings
});
