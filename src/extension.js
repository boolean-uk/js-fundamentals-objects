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

//isbn13 - deleting the asin number and book dimension.

book.isbn.isbn13 = isbn13;
delete book.isbn.asin
delete book.dimensions


// 1. Set this to the book name - using the book object

// set to book pages.
const name = book.name
console.log(book)
book.pages = 464;
console.log(book.pages)


// 2. Set this to the isbn 10 value - using the book object
const isbn10 = book.isbn.isbn10

// Changing the book category - because failed when ran code.
book.category = "Programming";

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
const numberOfVoucherCodes = basket.voucherCodes.length;

// 4. Set this variable to the first element in of the baskets voucher codes array - using the basket object
const firstVoucherCode = basket.voucherCodes[0];

// Selecting basket array, selecting item array, push to add object to the array.
basket.items.push({ name: 'Oranges', price: 0.75, quantity: 4 });

// Creating a variable called Apple, we are selecting the basket array, item section is within the basket array. 
// We are using the find function to find the item name 'Apple'.
// Using an if statment to see if apple exists.
// Apple exists. Using apple.price to change the price.

const apple = basket.items.find(item => item.name === 'Apple');
if (apple){
  apple.price = 2;
}

// Do not edit this exported object
module.exports = {
  name: name,
  isbn10: isbn10,
  book: book,
  basket: basket,
  numberOfVoucherCodes: numberOfVoucherCodes,
  firstVoucherCode: firstVoucherCode
}

