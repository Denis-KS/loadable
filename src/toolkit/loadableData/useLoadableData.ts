import { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Domain } from '../../domains/index';
import { setLoadableState } from '../../store/loadableData/actions';
import { getLoadableState } from '../../store/loadableData/selectors';
import { IStore } from '../../store/rootReducer';
import { createStoreId } from '../createStoreId';
import { useLiferef } from '../hooks/useLiferef';
import { notReachable } from '../notReachable';
import { LoadableData, Fetch } from './loadableData.types';


export const useLoadableData = <D, P, E>(fetch: Fetch<D, P>, domainKey: Domain, initialState: LoadableData<D, P, E> = {type: 'loading'}) => {
    const fetchRef = useLiferef(fetch)
    const dispatch = useDispatch();
    const storeId = useRef(createStoreId(domainKey));
    const state = useSelector((state: IStore<D, P, E>) => getLoadableState(state, storeId.current));

    const setState = (newState: LoadableData<D, P, E>) => {

        switch (newState.type) {
            case 'loading': 
                storeId.current = createStoreId(domainKey, newState.params);
                break;
            case 'loaded':
            case 'failed':
            case 'notAsked':
                storeId.current = createStoreId(domainKey);
                break;
            default: notReachable(newState)
        }

        dispatch(setLoadableState(fetchRef.current, newState, storeId.current));
    };

    useEffect(() => {
        setState(initialState)
    }, []);

    return { state, setState };
};