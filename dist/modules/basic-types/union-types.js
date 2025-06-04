"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.totalize = totalize;
let shoppingCart = [200, 670.13, '33.90', '55', 'not defined'];
function totalize(values) {
    return values
        .map((value) => (typeof value === 'number' ? value : parseFloat(value)))
        .filter((value) => !isNaN(value));
    //   .reduce((acc, curr) => acc + curr, 0) //totalizar;
}
console.log(totalize(shoppingCart));
