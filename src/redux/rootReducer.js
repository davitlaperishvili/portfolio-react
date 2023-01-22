import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { projectReducer } from "./projectReducer";
import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  app: appReducer,
  project: projectReducer,
  user: userReducer,
});
