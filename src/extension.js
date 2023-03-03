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
console.log('Q1', name)

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10
console.log('Q2', isbn10)

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
console.log('q3', numberOfVoucherCodes)

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log('Q4', firstVoucherCode)

// 5. Book pages should be 464
book.pages = 464

// 6. The price of apples should be updated to 2
basket.items[0].price = 2

// 7. Book ISBN 13 should be 978-0132350884
book.isbn.isbn13 = '978-0132350884'

// 8. Book category should be Programming
book.category = 'Programming'

// 9. Book should not contain the dimensions key - it should be deleted
delete book.dimensions

// 10. Book should not contain the asin key - it should be deleted
delete book.isbn.asin

// 11. 4 oranges priced at 0.75 should be added to the end of the items list
basket.items.push({ name: 'Oranges', quantity: 4, price: 0.75 })

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
