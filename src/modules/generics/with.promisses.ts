export const bootstrap = (): void => {
  // Promise

  // const promise = new Promise((resolve, reject) => {
  //   if (false) {
  //     reject('Rejeitada');
  //   }

  //   resolve('Resolvida');
  // });

  // async function promiseFunction() {
  //   return 200;
  // }

  // promiseFunction();

  interface Game {
    id: number;
    title: string;
    genre: string;
    year: number;
  }

  // type predicates
  function isGameArray(data: any): data is Game[] {
    return (
      Array.isArray(data) &&
      data.every(
        (item) =>
          typeof item.id === 'number' &&
          typeof item.title === 'string' &&
          typeof item.genre === 'string' &&
          typeof item.number === 'number',
      )
    );
  }

  fetch('https://argus-academy.com/mock/api/games/')
    .then((response) => {
      if (!response.ok) {
        console.error(
          'Error HTTP: ',
          `${response.status} - ${response.statusText}`,
        );
      }

      // type assertion

      // return response.json() as Promise<[Game]>;

      return response.json();
    })
    .then((data) => {
      if (isGameArray(data)) {
        console.log(data);
      } else {
        console.error('tipo de dado incorreto');
      }
    });
};
