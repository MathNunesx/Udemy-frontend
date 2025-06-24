//TODO CartItem
type CartItem = {
  id: number;
  price: number;
};

type Address = {
  cep: string;
  default: boolean;
};

type Customer = {
  adresses: Address[];
};
//TODO ShoppingCart
type ShoppingCart = {
  cartItems: CartItem[];
};

//TODO criar variavel do tipo SHoppingCart contendo CartItem
const shoppingCart = {
  cartItems: [
    { id: 1000, price: 200 },
    { id: 1200, price: 400 },
    { id: 1748, price: 20 },
  ],
};

const addresses: Address[] = [
  { cep: '00000-888', default: false },
  { cep: '00000-777', default: true },
  { cep: '00000-999', default: false },
];

const customer: Customer = {
  adresses: addresses,
};

console.log('Detalhes do customer', customer);
//TODO função do tipo void para somar valores dos itens
export function calculateTotal(shoppingCart: ShoppingCart): number {
  const total = shoppingCart.cartItems.reduce(
    (acc, item) => acc + item.price,
    0,
  );

  return total;
}

const total = calculateTotal(shoppingCart);

console.log(`Total do carrinho: R$ ${total.toFixed(2)}`);

export function getPrincipalAddress(customer: Customer): Address | undefined {
  return customer.adresses.find((addresses) => addresses.default);
}

const principalAddress = getPrincipalAddress(customer);

console.log(principalAddress);
