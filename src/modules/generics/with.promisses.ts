export const bootstrap = (): void => {
  // Promise

  const promise = new Promise((resolve, reject) => {
    if (false) {
      reject('Rejeitada');
    }

    resolve('Resolvida');
  });

  async function promiseFunction() {
    return 200;
  }

  promiseFunction();

  fetch('https://argus-academy.com/mock/api/games/').then((response) => {
    if (!response.ok) {
      console.error(
        'Error HTTP: ',
        `${response.status} - ${response.statusText}`,
      );
    }
    response.json().then((data) => console.log(data))
  });
};
