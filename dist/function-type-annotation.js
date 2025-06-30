"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = exports.getPrincipalAddress = void 0;
//TODO criar variavel do tipo SHoppingCart contendo CartItem
const shoppingCart = {
    cartItems: [
        { id: 1000, price: 200 },
        { id: 1200, price: 400 },
        { id: 1748, price: 20 },
    ],
};
const addresses = [
    { cep: '00000-888', default: false },
    { cep: '00000-777', default: true },
    { cep: '00000-999', default: false },
];
const customer = {
    adresses: addresses,
};
console.log('Detalhes do customer', customer);
//TODO função do tipo void para somar valores dos itens
let calculateTotal;
exports.calculateTotal = calculateTotal = function (shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    return total;
};
const total = calculateTotal(shoppingCart);
console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
let getPrincipalAddress;
exports.getPrincipalAddress = getPrincipalAddress = (customer) => {
    return customer.adresses.find((addresses) => addresses.default);
};
const principalAddress = getPrincipalAddress(customer);
console.log(principalAddress);
