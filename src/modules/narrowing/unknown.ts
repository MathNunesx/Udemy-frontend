export const bootstrap = (): void => {
  let valueUnknown: unknown; //tipo desconhecido

//   valueUnknown = [10,20,30] --> array

//     valueUnknown = { a: 1, b: 2 };

//   valueUnknown = 'stringada' --> string

  valueUnknown = 22.5; // -- number

  // let valueAny: any //assume qualquer tipo

  // valueAny.toFixed()

  // if(typeof valueUnknown == 'number'){
  //     valueUnknown.toFixed()
  // }

  function processDataUnknown(value: unknown) {
    if (Array.isArray(value)) {
      value.map((item) => console.log(item));
    }

    if (value instanceof Object) {
      if ('b' in value) {
        console.log(value.b);
      }
    }

    if (typeof value === 'string') {
      console.log(value.toLocaleUpperCase());
    }

    if (typeof value === 'number') {
      console.log(value.toFixed(0));
    }
  }

  processDataUnknown(valueUnknown);
};
