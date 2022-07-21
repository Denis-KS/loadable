import { isEmpty } from 'lodash';
import { removeEmpty } from './removeEmpty';

export const createStoreId = <P>(domain: string, params?: P): string => {
    if (isEmpty(params)) {
        return domain;
    } else {
        const cleanedUpParams = removeEmpty(params);
        return `${domain}:${Object.values(cleanedUpParams).join('.')}`;
    }
};