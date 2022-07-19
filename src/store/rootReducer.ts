import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";

interface IRootReducer {
    
};

const rootReducer: IRootReducer = combineReducers({});

export const store = createStore(rootReducer, applyMiddleware(thunk));