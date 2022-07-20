import { LoadableData } from "../../toolkit/loadableData/loadableData.types";
import { LoadableAction } from "./actions";
import key from './key';

interface ILoadableDataReducer<D, P, E> {
    [key: string]: LoadableData<D, P, E>
};

const reducer = <D, P, E>(state: ILoadableDataReducer<D, P, E> = {}, { type, payload, id }: LoadableAction<D, P, E>) => {
    switch(type) {
        case 'SET': return { ...state, [id]: payload };
        case 'CLEAR': 
        default: return state;
    }
};

export const loadableData = {
    [key]: reducer,
};