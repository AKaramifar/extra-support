import { combineReducers } from "redux";
import user from "./UserReducer";
import ActionController from "./ActionControllerReducer";

export default combineReducers({
  user,
  ActionController,
});
