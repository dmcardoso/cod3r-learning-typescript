class ProductChallengeTwo {
    constructor(public name: string, public price: number, public discount: number = 0) {}

    public resume(): string {
        return `${this.name} costs R$${this.priceWithDiscount} (${this.discount * 100}% off)`
    }

    public get priceWithDiscount(): number {
        return this.price * (1 - this.discount)
    }
}


const productChallengeOne = new ProductChallengeTwo('Banana', 45)
const prodcutChallengeTwo = new ProductChallengeTwo('Potato', 60, 0.5)
console.log(prodcutChallengeTwo.resume());
