import $ from 'jquery'
import Book from './model/book'

const book = new Book('DOm Quixote', 108.80, 0.10)

$('body').append(`<h1>${book.name}</h1>`)
$('body').append(`<h2>Price: ${book.priceWithDiscount()}</h2>`)