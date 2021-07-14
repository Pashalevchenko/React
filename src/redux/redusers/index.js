import {combineReducers} from "redux";
import {todosReducer} from "./todos";

export const rootReduser = combineReducers({
    todosReducer
});