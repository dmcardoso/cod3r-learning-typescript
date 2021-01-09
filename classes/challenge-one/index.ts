class Product {
    constructor(public name: string, public price: number, public discount: number = 0) {}
}

const productOne = new Product('Banana', 45)
const prodcutTwo = new Product('Potato', 60, 0.5)