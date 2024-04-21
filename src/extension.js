// This extension will require you to read the test failure messages to
// figure out what you need to change, not all of the information has been
// provided in the comments below.

// Do not edit this book object directly

const book = {
  name: 'Clean Code',
  author: 'Robert C. Martin',
  category: 'Cooking',
  isbn: {
    isbn10: '9780132350884',
    asin: '0132350882'
  },
  publisher: 'Prentice Hall',
  dimensions: '10x12x2'
}

const isbn13 = '978-0132350884'

const name = book.name
const isbn10 = book.isbn.isbn10

const basket = {
  items: [
    {
      name: 'Apple',
      quantity: 10,
      price: 1
    },
    {
      name: 'Lemon',
      quantity: 2,
      price: 0.5
    }
  ],
  voucherCodes: ['AA-AA-A', 'BB-BB-B']
}

const numberOfVoucherCodes = basket.voucherCodes.length
const firstVoucherCode = basket.voucherCodes[0]

basket.items[0].price = 2

// Add oranges to the basket
basket.items.push({
  name: 'Oranges',
  quantity: 4,
  price: 0.75
})

book.category = 'Programming'
book.pages = 464

book.isbn.isbn10 = isbn13

delete book.dimensions
delete book.isbn.asin

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}

console.log()
