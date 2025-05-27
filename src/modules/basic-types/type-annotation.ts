// let product: string = 'Goku';

// Inference
let product = 'keyboard';
let price = 200.9;

// product.toUpperCase();
// price.toFixed(0);


// nesse caso usamos o type annotation
export function display(product:string, price:number) {
    console.log(product.toUpperCase(), price.toFixed(0))
}

display(product, price);
