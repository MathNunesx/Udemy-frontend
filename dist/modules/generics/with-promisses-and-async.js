import { isCarArray } from '../../utils/type-predicates.js';
export const bootstrap = () => {
    async function fetchData(url, typePredicatedCallback) {
        const resp = await fetch(url);
        return fetch(url)
            .then((response) => {
            if (!response.ok) {
                console.error('Error HTTP: ', `${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
            .then((data) => {
            if (typePredicatedCallback(data)) {
                return data;
            }
            else {
                return null;
            }
        });
    }
    const respCar = fetchData('https://argus-academy.com/mock/api/cars/', isCarArray);
    respCar.then((data) => console.log(data));
    console.log("Funções assincronas são excutadas em paralelo até que sejam resolvidas");
};
