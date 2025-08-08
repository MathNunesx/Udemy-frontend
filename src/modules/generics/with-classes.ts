export const bootstrap = (): void => {
  class Stack<T> {
    constructor(private stack: T[]) {}
    last(): T | undefined {
      if (this.stack.length > 0) return this.stack[this.stack.length - 1];
    }
  }

  type Product = { id: number; name: string };

  const products: Product[] = [
    { id: 3, name: 'Iphone' },
    { id: 4, name: 'Panela' },
    { id: 5, name: 'SmartWatch' },
  ];

  const stack1 = new Stack(products);
  const stackLastItem = stack1.last();
  console.log(stackLastItem);

  const stack2 = new Stack(['Luiz', 'Ana', 'Albedo']);
  const stack2LastItem = stack2.last();
  console.log(stack2LastItem);



  //   const numbers = [1, 2, 3, 4, 90];
  //   const lastNumber = Stack.last(numbers);
  //   console.log(lastNumber);

  // const lastProduct = Stack.last(products);
  //   console.log(lastProduct);
};
