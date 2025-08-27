import { isCarArray } from '../../utils/type-predicates.js';
export const bootstrap = () => {
    async function fetchData(url, typePredicatedCallback) {
        const resp = await fetch(url);
        if (!resp.ok) {
            console.error('Error HTTP: ', `${resp.status} - ${resp.statusText}`);
            return null;
        }
        const data = await resp.json();
        return typePredicatedCallback(data) ? data : null;
    }
    const respCar = fetchData('https://argus-academy.com/mock/api/cars/', isCarArray);
    respCar.then((data) => console.log(data));
    console.log('Funções assincronas são excutadas em paralelo até que sejam resolvidas');
};
