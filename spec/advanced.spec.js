const { item1, item2, shoppingBasket } = require('../src/advanced')

describe('Advanced:', () => {
  // 1. test item1
  it('item1 has valid properties', () => {
    expect(item1.name).toEqual('item1')
    expect(item1.price).toEqual(400)
    expect(item1.quantity).toEqual(4)
    expect(item1.hasDiscount).toEqual(true)
    expect(item1.discount).toEqual(0.3)
  })

  // 2. test item2
  it('item2 has valid properties', () => {
    expect(item2.name).toEqual('item2')
    expect(item2.price).toEqual(300)
    expect(item2.quantity).toEqual(3)
    expect(item2.hasDiscount).toEqual(false)
    expect(item2.discount).toEqual(0.0)
  })

  // 3. test shoppingBasket
  it('shoppingBasket has valid properties', () => {
    const a = {
      name: 'item1',
      price: 400,
      quantity: 4,
      hasDiscount: true,
      discount: 0.3
    }

    const b = {
      name: 'item2',
      price: 300,
      quantity: 3,
      hasDiscount: false,
      discount: 0.0
    }
    const basket = {
      items: [a, b],
      shopName: 'Sheepmart'
    }
    expect(shoppingBasket).toEqual(basket)
  })
})
