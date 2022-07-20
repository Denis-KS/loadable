import { LoadableData } from "../../toolkit/loadableData/loadableData.types";

const SET = 'SET';
const CLEAR = 'CLEAR';

type LoadableActionType = 'SET' | 'CLEAR'; //`${SET}` | `${CLEAR}`;

export type LoadableAction<D, P, E> = { type: LoadableActionType, payload: LoadableData<D, P, E>, id: string };

