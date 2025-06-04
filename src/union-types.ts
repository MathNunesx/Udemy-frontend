let shoppingCart = [200, 670.13, '33.90', '55', 'not defined'];

export function totalize(values: (string | number)[]) {
  return values
    .map((value) => (typeof value === 'number' ? value : parseFloat(value)))
    .filter((value) => !isNaN(value));
//   .reduce((acc, curr) => acc + curr, 0) //totalizar;
}

console.log(totalize(shoppingCart));
