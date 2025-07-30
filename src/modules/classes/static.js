class Product {
    name = 'Smartphone';
    price = 2500.55

    showDetails(){
        console.log(`${this.name}: ${this.price}`)
    }
}

product = new Product();
product.showDetails()

console.log('Atributo público: ', product.name)