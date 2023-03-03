const { person, mainInstrument, bestFriend } = require('../src/core.js')

describe('Fundamental Objects', () => {
  it('person', () => {
    expect(person).toEqual({
      age: 43,
      name: 'Matt',
      instruments: ['Guitar', 'Piano', 'Vocals'],
      profession: { name: 'Musician' },
      friends: [
        { name: 'Chris', age: 46 },
        { name: 'Dom', age: 43 }
      ]
    })
  })

  it('mainInstrument', () => {
    expect(mainInstrument).toEqual('Vocals')
  })

  it('bestFriend', () => {
    expect(bestFriend).toEqual('Chris')
  })
})
