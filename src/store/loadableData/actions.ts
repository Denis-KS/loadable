import { Fetch, LoadableData } from "../../toolkit/loadableData/loadableData.types";
import { notReachable } from "../../toolkit/notReachable";
import { IStore } from "../rootReducer";
import { getLoadableState } from "./selectors";
import key from './key';

export const SET = `${key}/SET`;
export const CLEAR = `${key}/SET`;


export type LoadableAction<D, P, E> = { type: string, payload: LoadableData<D, P, E>, id: string };

const setLoadableData = <D, P, E>(payload: LoadableData<D, P, E>, id: string): LoadableAction<D, P, E> => ({
    type: SET,
    payload,
    id,
});

export const setLoadableState = <D, P, E>(fetch: Fetch<D, P>, newState: LoadableData<D, P, E>, storeId: string): any => (dispatch: any, getState: () => IStore<D, P, E>) => {
    const currentState = getLoadableState(getState(), storeId);

    if (currentState.type === 'loading') return Promise.resolve();

    switch (newState.type) {
        case 'loading': 
            dispatch(setLoadableData({ type: 'loading', params: newState.params }, storeId));
            fetch(newState.params)
            .then((result) => dispatch(setLoadableData({ type: 'loaded', data: result }, storeId)))
            .catch((error) => dispatch(setLoadableData({ type: 'failed', error }, storeId)));
            break;
        case 'notAsked':
        case 'loaded':
        case 'failed':
            break;
        default: notReachable(newState);
    }
}

