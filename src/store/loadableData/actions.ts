import { Fetch, LoadableData } from "../../toolkit/loadableData/loadableData.types";
import { IStore } from "../rootReducer";
import { getLoadableState } from "./selectors";

const SET = 'SET';
const CLEAR = 'CLEAR';

type LoadableActionType = 'SET' | 'CLEAR'; //`${SET}` | `${CLEAR}`;

export type LoadableAction<D, P, E> = { type: LoadableActionType, payload: LoadableData<D, P, E>, id: string };

export const setLoadableState = <D, P, E>(state: LoadableData<D, P, E>, fetch: Fetch<D, P>, storeId: string): any => (dispatch: any, getState: () => IStore<D, P, E>) => {
    const state = getLoadableState(getState(), storeId);
    console.log(storeId);

    return
}

