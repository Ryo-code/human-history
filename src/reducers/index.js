import { combineReducers } from "redux";
import TimesReducer from "./TimesReducer";

export default combineReducers({
  times: TimesReducer //console.log shows this as a state consisting of object w\ a key of "times"
});
