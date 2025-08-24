import { isCarArray, isGameArray } from '../../utils/type-predicates.js';

export const bootstrap = (): void => {
  function fetchData<T>(
    url: string,
    typePredicatedCallback: (data: any) => boolean,
  ): Promise<T | null> {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          console.error(
            'Error HTTP: ',
            `${response.status} - ${response.statusText}`,
          );
        }

        return response.json();
      })
      .then((data) => {
        if (typePredicatedCallback(data)) {
          return data as T;
        } else {
          return null;
        }
      });
  }

  const resp = fetchData<Game[]>(
    'https://argus-academy.com/mock/api/games/',
    isGameArray,
  );
  resp.then((data) => console.log(data));


  const respCar = fetchData<Cars[]>(
    'https://argus-academy.com/mock/api/cars/',
    isCarArray,
  );
  respCar.then((data) => console.log(data));
};
