import { UniversitiesParams } from "./universitiesParams";
import { isEmpty } from 'lodash';

export const getUniversities = (params: UniversitiesParams | undefined) => {
    console.log(params)
    const url = 'http://universities.hipolabs.com/search';
    const queryParams = `country=${params?.['country']}`;
    return !isEmpty(params) 
        ? fetch(`${url}?${queryParams}`).then(result => result.json())
        : fetch(url).then(result => result.json());
};