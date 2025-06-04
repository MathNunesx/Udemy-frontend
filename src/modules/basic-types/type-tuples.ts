let filmArray: (number | string | boolean)[] = [2, 'Vingadores', true];

let filmTuple: [number, string, boolean] = [2, 'Star Wars', false];

let filmTupleOpcionalPosition: [number, string, boolean?] = [
  2,
  'Star Wars',
  false,
];

const [idArr, titleArr, avaliableArr] = filmArray;

const [id, title, avaliable] = filmTuple;

console.log(id)
