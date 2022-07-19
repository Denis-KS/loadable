import { useSelector, useDispatch } from 'react-redux';
import { Domain } from '../../domains/index';
import { useLiferef } from '../hooks/useLiferef';
import * as LoadableTypes from './loadableData.types';

export type LoadableData<D, P, E> = 
    LoadableTypes.NotAsked | 
    LoadableTypes.Loaded<D> | 
    LoadableTypes.Loading<P> | 
    LoadableTypes.Failed<E>;

type Fetch<D, P> = (params?: P) => Promise<D>

export const useLoadableData = <D, P, E>(fetch: Fetch<D, P>, domainKey: Domain) => {
    const fetchRef = useLiferef(fetch)
    const dispatch = useDispatch();

};