// let numbers: readonly number[] = [10, 20, 30, 40, 50]
// let numbers: readonlyArray<number>[] = [10, 20, 30, 40, 50]
let numbers = [10, 20, 30, 40, 50];
// numbers[0] = 30
let numbersCopy = numbers.map((item) => item * 2);
console.log(numbers);
console.log(numbersCopy);
export default () => { };
