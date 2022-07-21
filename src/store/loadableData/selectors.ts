import { LoadableData } from '../../toolkit/loadableData/loadableData.types';
import { IStore } from '../rootReducer';
import key from './key';

const getBranch = <D, P, E>(state: IStore<D, P, E>) => state[key] || {};

export const getLoadableState = <D, P, E>(state: IStore<D, P, E>, id: string): LoadableData<D, P, E> => getBranch(state)[id] || {}; 