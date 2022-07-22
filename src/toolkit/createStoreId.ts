import { Domain } from '../domains';
import { isEmpty } from 'lodash';
import { removeEmpty } from './removeEmpty';

export const createStoreId = <P>(domain: Domain, params?: P): string => {
    if (isEmpty(params)) {
        return domain.toString();
    } else {
        const cleanedUpParams = removeEmpty(params);
        return `${domain}:${Object.values(cleanedUpParams).join('.')}`;
    }
};