export const bootstrap = () => {
    class Product {
        name;
        price;
        stock;
        constructor(name, price, stock) {
            this.name = name;
            this.price = price;
            this.stock = stock;
        }
    }
    class eletronic extends Product {
        showDetails() {
            return `detalhes: ${this.name} -  ${this.price}`;
        }
    }
    ;
    //   acesso fora da classe
    // instancia (objeto)
    const product = new Product('Iphone', 5300, 100);
    console.log(product.name);
};
