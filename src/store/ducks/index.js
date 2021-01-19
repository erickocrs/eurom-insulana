import { combineReducers } from "redux";

import scrollReducer from "./scroll";
import menuReducer from "./menu";

export const reducers = combineReducers({
    scrollReducer,
    menuReducer
});
