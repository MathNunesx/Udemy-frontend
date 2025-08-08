export const bootstrap = (): void => {
  function processAndReturn(value: string | number): string | number {
    return value;
  }

  function processAndReturnGeneric<T, U, X>(n: T, s: U, b: X): T | U | X {
    // return `Texto: ${n} - ${s} ${b}`

    return n;
  }

  const y = processAndReturnGeneric(7, 'Y', true);
  console.log(y);

  //   const x = processAndReturnGeneric('Star Wars');
  //   console.log(x.toUpperCase());

  //   const y = processAndReturnGeneric(7);
  //   console.log(y.toFixed(2));

  // const z = processAndReturnGeneric(true);
  //   console.log(z)

  //   const x = processAndReturn('Star Wars');

  //   if (typeof x === 'string') {
  //     console.log(x.toLocaleUpperCase());
  //   }

  //   const y = processAndReturn(7);
  //  if (typeof y === 'number') {
  //     console.log(y.toFixed(2));
  //   }
};
