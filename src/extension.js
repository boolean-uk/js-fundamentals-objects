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

/* eslint-disable no-unused-vars */
const isbn13 = '978-0132350884'
book.isbn.isbn13 = isbn13
console.log('isbn 13 updated to 978-0132350884:', isbn13)

// 1. Set this to the book name - using the book object
const name = book.name
console.log('1- book name - expect Clean Code:', name)

book.category = 'Programming'
console.log('updated book catagory - expect programming:', book.category)

book.pages = 464
console.log('book now includes pages - expect 464:', book)

delete book.dimensions
console.log('check if dimensions have been removed', book)

delete book.isbn.asin
console.log('check if asin has been removed', book)

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10
console.log('2- set to books isbn - expect 9780132350884:', isbn10)

// Do not modify this basket object directly
const basket = {
  items: [
    {
      name: 'Apple',
      quantity: 10,
      price: 2
    },
    {
      name: 'Lemon',
      quantity: 2,
      price: 0.5
    },
    {
      name: 'Oranges',
      price: 0.75,
      quantity: 4
    }
  ],
  voucherCodes: ['AA-AA-A', 'BB-BB-B']
}

console.log('updated basket include 4 oranges at 0.75 ea:', basket)

// 3. Set this variable to the length of the baskets voucher codes array - using the basket object
const numberOfVoucherCodes = basket.voucherCodes.length
console.log(
  '3- set to length of voucherCodes Array - expect 2:',
  numberOfVoucherCodes
)

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log(
  '4- set to the first voucher code - expect AA-AA-A:',
  firstVoucherCode
)

console.log('isbn 10', isbn10)

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
  basket: basket,
  numberOfVoucherCodes: numberOfVoucherCodes,
  firstVoucherCode: firstVoucherCode
}
