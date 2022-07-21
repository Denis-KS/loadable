import { UniversitiesParams } from "./universitiesParams";

export const getUniversities = (params: UniversitiesParams | undefined) => {
    const url = 'http://universities.hipolabs.com/search';
    // const queryParams = `country=${params['country']}`;
    // return fetch(`${url}?${queryParams}`).then(result => result.json())
    return fetch(`${url}`).then(result => result.json())
};