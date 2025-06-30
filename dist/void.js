"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = calculateTotal;
//TODO criar variavel do tipo SHoppingCart contendo CartItem
const shoppingCart = {
    cartItems: [
        { id: 1000, price: 200 },
        { id: 1200, price: 400 },
        { id: 1748, price: 20 },
    ]
};
//TODO função do tipo void para somar valores dos itens
function calculateTotal(shoppingCart) {
    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);
}
calculateTotal(shoppingCart);
