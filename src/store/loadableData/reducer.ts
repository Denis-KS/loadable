import { LoadableData } from "../../toolkit/loadableData/loadableData.types";
import { LoadableAction } from "./actions";
import key from './key';

export interface ILoadableDataState<D, P, E> {
    [key: string]: LoadableData<D, P, E>
};

const reducer = <D, P, E>(state: ILoadableDataState<D, P, E> = {}, { type, payload, id }: LoadableAction<D, P, E>) => {
    switch(type) {
        case 'SET': return { ...state, [id]: payload };
        case 'CLEAR': 
        default: return state;
    }
};

export const loadableData = {
    [key]: reducer,
};