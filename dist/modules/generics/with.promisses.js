import { isCarArray, isGameArray } from '../../utils/type-predicates.js';
export const bootstrap = () => {
    function fetchData(url, typePredicatedCallback) {
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
    const resp = fetchData('https://argus-academy.com/mock/api/games/', isGameArray);
    resp.then((data) => console.log(data));
    const respCar = fetchData('https://argus-academy.com/mock/api/cars/', isCarArray);
    respCar.then((data) => console.log(data));
};
