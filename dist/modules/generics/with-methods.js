export const bootstrap = () => {
    class Stack {
        static last(arr) {
            if (arr.length > 0)
                return arr[arr.length - 1];
        }
    }
    const numbers = [1, 2, 3, 4, 90];
    const lastNumber = Stack.last(numbers);
    console.log(lastNumber);
    const products = [
        { id: 3, name: 'Iphone' },
        { id: 4, name: 'Panela' },
        { id: 5, name: 'SmartWatch' }
    ];
    const lastProduct = Stack.last(products);
    console.log(lastProduct);
};
