import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loadableData } from "./loadableData/reducer";

const rootReducer = combineReducers({
    ...loadableData,
 });

export const store = createStore(rootReducer, applyMiddleware(thunk));
