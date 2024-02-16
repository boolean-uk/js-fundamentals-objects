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

// 1. Set this to the book name - using the book object
const name = book.name
console.log(name)

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10
console.log(isbn10)

// Do not modify this basket object directly
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

// 3. Set this variable to the length of the baskets voucher codes array - using the basket object
const numberOfVoucherCodes = basket.voucherCodes.length
console.log(numberOfVoucherCodes)

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log(firstVoucherCode)

// Update price of apples to 2 in basket
basket.items[0].price = 2
console.log(basket)

// Add oranges priced at 0.75 to items in basket
basket.items.push({ name: 'Oranges', price: 0.75, quantity: 4 })
console.log(basket)

// Set book pages to 464
book.pages = 464
console.log(book)

// Set book category to Programming
book.category = 'Programming'
console.log(book)

// Delete asin key from book
delete book.isbn.asin
console.log(book)

// Delete demensions key from book
delete book.dimensions
console.log(book)

// Add book ISBN 13
book.isbn.isbn13 = isbn13
console.log(book)

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
