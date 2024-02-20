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

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10

// 3. Adding page element to the book object and setting it to 464
book.pages = 464

// 4. Removing dimensions key from the book object
delete book.dimensions

// 5. Setting the category from 'Cooking' to 'Programming'
book.category = 'Programming'

// 6. Deleting the asin key from the book object
delete book.isbn.asin

// 7. Removing isbn10 key from the book object and adding isbn13 key
delete book.isbn.isbn10
book.isbn.isbn13 = isbn13

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

// 8. Set this variable to the length of the baskets voucher codes array - using the basket object
const numberOfVoucherCodes = basket.voucherCodes.length

// 9. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]

// 10. Price of apples updated to 2
basket.items[0].price = 2

// 11. 4 oranges priced at 0.75 added to the end of the items array
basket.items.push({ name: 'Oranges', price: 0.75, quantity: 4 })

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
