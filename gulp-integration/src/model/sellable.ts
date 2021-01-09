export default interface Sellable {
    name: string
    price: number
    discount: number
    priceWithDiscount(): number
}