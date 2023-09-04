// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt
// Create property as 'name' and value as 'Matt'
person.name = 'Matt'
console.log(person)
// { age: 32, size: 'Small', name: 'Matt' }

// 2. Remove the size property from the person
// Use delete keyword to remove the size property from the person
delete person.size
console.log(person)
// { age: 32, name: 'Matt' }

// 3. Increase the person's age by 11
person.age += 11
console.log(person)
// { age: 43, name: 'Matt' }

// 4. Add an instruments property to the person, initialised as an empty array
// Add 'intrument' property to the person object and set to empty array
person.instruments = []
console.log(person)
// { age: 43, name: 'Matt', instruments: [] } - essentially an array within an object

// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals
// Using the push method, push the instruments to the array 
person.instruments.push('Guitar', 'Piano', 'Vocals')
console.log(person)
// { age: 43, name: 'Matt', instruments: [ 'Guitar', 'Piano', 'Vocals' ] }

// 6. Using an index on the instruments array, set the mainInstrument variable below
// to the third instrument in the array
// thrid will be the second index
const mainInstrument = person.instruments[2]
console.log(mainInstrument)
// Vocals

// 7. Add a profession property to the person, which is an object
// Add a property called 'profession' and set as a object
person.profession = {}

// 8. Add a name property to the profession object with the value Musician
// Add a property called 'name' to the profession object, set as 'Musician'
person.profession.name = 'Musician'
console.log(person)
// {
//   age: 43,
//   name: 'Matt',
//   instruments: [ 'Guitar', 'Piano', 'Vocals' ],
//   profession: { name: 'Musician' }
// }

// 9. Add a friends property to the person, which is an empty array
person.friends = []

// 10. Add two objects to the persons friends array with the following properties:
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43

person.friends.push(
  {
    name: 'Chris',
    age: 46
  },
  {
    name: 'Dom',
    age: 43
  }
)
console.log(person)
// friends: [ { name: 'chris', age: 46 }, { name: 'Dom', age: 43 } ]

// //{
//   age: 43,
//   name: 'Matt',
//   instruments: [ 'Guitar', 'Piano', 'Vocals' ],
//   profession: { name: 'Musician' },
//   friends: [ { name: 'chris', age: 46 }, { name: 'Dom', age: 43 } ]
// }

// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = person.friends[0].name
console.log(bestFriend)
// chris

// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
