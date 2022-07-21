import { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Domain } from '../../domains/index';
import { setLoadableState } from '../../store/loadableData/actions';
import { getLoadableState } from '../../store/loadableData/selectors';
import { IStore } from '../../store/rootReducer';
import { createStoreId } from '../createStoreId';
import { useLiferef } from '../hooks/useLiferef';
import { LoadableData, Fetch } from './loadableData.types';


export const useLoadableData = <D, P, E>(fetch: Fetch<D, P>, domainKey: Domain, initialState: LoadableData<D, P, E> = {type: 'loading'}) => {
    const fetchRef = useLiferef(fetch)
    const dispatch = useDispatch();
    const [storeId, setStoreId] = useState<string>(createStoreId(domainKey));
    const state = useSelector((state: IStore<D, P, E>) => getLoadableState(state, storeId));

    const setState = (newState: LoadableData<D, P, E>) => {
        setStoreId(() => {
            const params = newState.type === 'loading' ? newState.params : {};
            const storeId = createStoreId(domainKey, params);
            dispatch(setLoadableState(newState, fetchRef.current, storeId));
            return storeId;
        });
    };

    useEffect(() => {
        setState(initialState)
    }, []);

    return { state, setState };
};