"use strict";
// let product: string = 'Goku';
Object.defineProperty(exports, "__esModule", { value: true });
exports.display = display;
// Inference
let product = 'keyboard';
let price = 200.9;
// product.toUpperCase();
// price.toFixed(0);
// nesse caso usamos o type annotation
function display(product, price) {
    console.log(product.toUpperCase(), price.toFixed(0));
}
display(product, price);
