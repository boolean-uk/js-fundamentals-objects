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
const numberOfVoucherCodes = basket.items.length
console.log(numberOfVoucherCodes)
// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0]
console.log(firstVoucherCode)


//Read from the website

// 1) Extension: Book category should be Programming
//   Message:
//     Expected 'Cooking' to equal 'Programming'.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:33:35)
//         at <Jasmine>

book.category = "Programming"




// 2) Extension: Book should not contain the dimensions key - it should be deleted
//   Message:
//     Expected '10x12x2' not to be defined.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:45:41)
//         at <Jasmine>
delete book.dimensions




// 3) Extension: Book should not contain the asin key - it should be deleted
//   Message:
//     Expected '0132350882' not to be defined.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:49:40)
//         at <Jasmine>

delete book.isbn.asin



// 4) Extension: Book ISBN 13 should be 978-0132350884
//   Message:
//     Expected undefined to equal '978-0132350884'.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:41:38)
//         at <Jasmine>

book.ISBN13 = isbn13
console.table(book)

// 5) Extension: Book pages should be 464
//   Message:
//     Expected undefined to equal 464.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:37:32)
//         at <Jasmine>

book.pages = 464



// 6) Extension: 4 oranges priced at 0.75 should be added to the end of the items list
//   Message:
//     Expected undefined to equal Object({ name: 'Oranges', price: 0.75, quantity: 4 }).
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:17:37)
//         at <Jasmine>

basket.items.push({ name: 'Oranges', price: 0.75, quantity: 4  })



// 7) Extension: The price of apples should be updated to 2
//   Message:
//     Expected 1 to equal 2.
//   Stack:
//         at <Jasmine>
//         at UserContext.<anonymous> (/home/runner/work/js-fundamentals-objects/js-fundamentals-objects/spec/extension.spec.js:13:43)
//         at <Jasmine>
basket.items[0].price = 2


console.table(basket.items)

// Do not edit this exported object
module.exports = {
  name,
  isbn10,
  book,
  basket,
  numberOfVoucherCodes,
  firstVoucherCode
}
