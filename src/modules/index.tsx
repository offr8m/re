import { combineReducers } from "redux";
import msgs from "./msgs";

const rootReducer = combineReducers({
  msgs
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
