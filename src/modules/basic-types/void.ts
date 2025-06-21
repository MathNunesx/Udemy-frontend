//TODO CartItem
type CartItem ={
    id: number,
    price: number
}
//TODO ShoppingCart
type ShoppingCart ={
    cartItems: CartItem[]
}

//TODO criar variavel do tipo SHoppingCart contendo CartItem
const shoppingCart ={
    cartItems: [
        {id: 1000, price: 200},
        {id: 1200, price: 400},
        {id: 1748, price: 20},
    ]
}
//TODO função do tipo void para somar valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): void{

    const total = shoppingCart.cartItems.reduce((acc, item) => acc + item.price, 0)
    console.log(`Total do carrinho: R$ ${total.toFixed(2)}`)
}

calculateTotal(shoppingCart)