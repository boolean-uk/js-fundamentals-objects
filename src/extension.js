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
// Clean Code

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10
console.log(isbn10)
// 9780132350884

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
// 2

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log(firstVoucherCode)
// AA-AA-A

// - TEST TO PASS

// Book ISBN 13 should be 978-0132350884
// Because the isbn was isbn: { isbn10:  '9780132350884'}, as per the top object, I had to delete the book.isbn.isbn10 and then add book.isbn.isbn13 and then assign isbn13 variable to this
delete book.isbn.isbn10
book.isbn.isbn13 = isbn13

console.log(book)

// Book should not contain the asin key - should be deleted
delete book.isbn.asin
console.log(book)

// Book pages should be 464
book.pages = 464
console.log(book)

// 10x12x2 not to be defined
delete book.dimensions
console.log(book)

// Cooking to equal 'Programming'
book.category = 'Programming'
console.log(book)

// Item Orange should be added
basket.items.push({
  name: 'Oranges',
  price: 0.75,
  quantity: 4
})

console.log(basket)

// Price of apples should be 2
basket.items[0].price = 2
console.log(basket)

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
