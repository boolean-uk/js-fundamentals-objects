const answers = require('../src/extension.js')

describe('Extension:', () => {
  it('numberOfVoucherCodes should be 2', () => {
    expect(answers.numberOfVoucherCodes).toEqual(2)
  })

  it('firstVoucherCode should be AA-AA-A', () => {
    expect(answers.firstVoucherCode).toEqual('AA-AA-A')
  })

  it('The price of apples should be updated to 2', () => {
    expect(answers.basket.items[0].price).toEqual(2)
  })

  it('4 oranges priced at 0.75 should be added to the end of the items list', () => {
    expect(answers.basket.items[2]).toEqual({
      name: 'Oranges',
      price: 0.75,
      quantity: 4
    })
  })

  it('name should be equal to the book name', () => {
    expect(answers.name).toEqual('Clean Code')
  })

  it("ISBN 10 should be equal to the book's ISBN 10 number", () => {
    expect(answers.isbn10).toEqual('9780132350884')
  })

  it('Book category should be Programming', () => {
    expect(answers.book.category).toEqual('Programming')
  })

  it('Book pages should be 464', () => {
    expect(answers.book.pages).toEqual(464)
  })

  it('Book ISBN 13 should be 978-0132350884', () => {
    expect(answers.book.isbn.isbn13).toEqual('978-0132350884')
  })

  it('Book should not contain the dimensions key - it should be deleted', () => {
    expect(answers.book.dimensions).not.toBeDefined()
  })

  it('Book should not contain the asin key - it should be deleted', () => {
    expect(answers.book.isbn.asin).not.toBeDefined()
  })
})
