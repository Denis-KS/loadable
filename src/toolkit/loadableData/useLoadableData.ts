import { useEffect, useState } from 'react';
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
    const [storeId, setStoreId] = useState<string>(createStoreId(domainKey));
    const state = useSelector((state: IStore<D, P, E>) => getLoadableState(state, storeId));

    const setState = (newState: LoadableData<D, P, E>) => {
        
        setStoreId(() => {
            let newStoreId = createStoreId(domainKey);
            switch (newState.type) {
                case 'loading': 
                    newStoreId = createStoreId(domainKey, newState.params);
                    break;
                case 'loaded':
                case 'failed':
                case 'notAsked':
                    break;
                default: notReachable(newState)
            }

            dispatch(setLoadableState(newState, fetchRef.current, newStoreId));
            return newStoreId;
        });
    };

    useEffect(() => {
        setState(initialState)
    }, []);

    return { state, setState };
};