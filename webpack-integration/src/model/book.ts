import Sellable from './sellable';

export default class Book implements Sellable {
    constructor(
        public name: string, 
        public readonly price: number, 
        public readonly discount: number
    ) {}

    public priceWithDiscount() {
        return this.price * (1 - this.discount)
    }
}