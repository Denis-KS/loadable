import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { loadableData, ILoadableDataState } from "./loadableData/reducer";
import loadableDataKey from './loadableData/key';

export interface IStore<D, P, E> {
    [loadableDataKey]: ILoadableDataState<D, P, E>
} 

const rootReducer = <D, P, E>() => combineReducers<IStore<D, P, E>>({
    ...loadableData,
 });

export const store = createStore(rootReducer(), applyMiddleware(thunk));
