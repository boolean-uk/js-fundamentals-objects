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
console.log(`Should read Clean Code: ${name}`)
console.log('--------')

// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10
console.log(`Should read 9780132350884: ${isbn10}`)
console.log('--------')

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
console.log(`Should read 2: ${numberOfVoucherCodes}`)
console.log('--------')

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log(`Should read AA-AA-A: ${firstVoucherCode}`)
console.log('--------')

// Work from the error codes

// Changed to Category of the book to Programming instead of Cooking
book.category = 'Programming'
console.log(`Category should now be updated to Programming`)
console.log(book)
console.log('--------')

// Changed the price of the Apples to 2 instead of 1
basket.items[0].price = 2
console.log(`Apples price should now be updated to 2`)
console.log(basket)
console.log('--------')

// Deleted the dimensions form the book object
delete book.dimensions
console.log(`Dimensions should now be removed`)
console.log(book)
console.log('--------')

// Created and set isbn13 in the isbn object of book
book.isbn.isbn13 = '978-0132350884'
console.log(`Book should now have added isbn13 with the value of 978-0132350884`)
console.log(book.isbn)
console.log('--------')

// Created and set a pages value for book
book.pages = 464
console.log(`Book should now have a page value that is set to 464`)
console.log(book)
console.log('--------')

// Added a new object for Oranges to the end of the basket.items array 
basket.items.push({
  name: 'Oranges',
  quantity: 4,
  price: 0.75
})
console.log(`The basket should have oranges added to its item array with name: oranges quantity: 4 and price: 0.75`)
console.log(basket.items[2])
console.log('--------')

// Deleted the asin value form the book.isbn object
delete book.isbn.asin
console.log('Books isbn should no longer contain asin')
console.log(book.isbn)
console.log('--------')

console.log()

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
  basket: basket,
  numberOfVoucherCodes: numberOfVoucherCodes,
  firstVoucherCode: firstVoucherCode
}

const test = basket.items.findIndex(basket.items.name === 'Apple')
console.log(test)
