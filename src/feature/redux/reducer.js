import { combineReducers } from "redux";
import textReducer from "./text.slice";

const rootReducer = combineReducers({
  text: textReducer,
});

export default rootReducer;
