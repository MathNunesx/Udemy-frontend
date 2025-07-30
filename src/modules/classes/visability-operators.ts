export const bootstrap = (): void => {
  class Product {
    public name: string;
    protected price: number;
    private stock: number;

    constructor(name: string, price: number, stock: number) {
      this.name = name;
      this.price = price;
      this.stock = stock;
    }
  }

  class eletronic extends Product {
    showDetails(): string {
      return `detalhes: ${this.name} -  ${this.price}`;
    }
  };

//   acesso fora da classe

// instancia (objeto)

 const product = new Product('Iphone', 5300, 100)
 console.log(product.name)
};
