import { isCarArray, isGameArray } from '../../utils/type-predicates.js';

export const bootstrap = (): void => {
  async function fetchData<T>(
    url: string,
    typePredicatedCallback: (data: any) => boolean,
  ): Promise<T | null> {
    const resp = await fetch(url);
    if (!resp.ok) {
      console.error('Error HTTP: ', `${resp.status} - ${resp.statusText}`);
      return null;
    }

    const data = await resp.json();
    return typePredicatedCallback(data) ? (data as T) : null
  }


  const respCar = fetchData<Cars[]>(
    'https://argus-academy.com/mock/api/cars/',
    isCarArray,
  );
  respCar.then((data) => console.log(data));

  console.log(
    'Funções assincronas são excutadas em paralelo até que sejam resolvidas',
  );
};
