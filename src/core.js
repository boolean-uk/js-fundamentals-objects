// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt
person.name = 'Matt'
console.log(person)
// 2. Remove the size property from the person
delete person.size
console.log(person)
// 3. Increase the person's age by 11
person.age = person.age + 11
console.log(person)
// 4. Add an instruments property to the person, initialised as an empty array
person.instruments = []
console.log(person)
// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals
person.instruments = ['Guitar', 'Piano', 'Vocals']
console.log(person)
// 6. Using an index on the instruments array, set the mainInstrument variable below
// to the third instrument in the array
const mainInstrument = person.instruments[2]
console.log(mainInstrument)
// 7. Add a profession property to the person, which is an object
// eslint-disable-next-line dot-notation, no-undef
person['profession'] = profession = {}
console.log(person)
// 8. Add a name property to the profession object with the value Musician
// eslint-disable-next-line dot-notation, no-undef
profession['name'] = 'Musician'
console.log(person)
// 9. Add a friends property to the person, which is an empty array
// eslint-disable-next-line dot-notation
person['friends'] = []
console.log(person)
// 10. Add two objects to the persons friends array with the following properties:
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43

// eslint-disable-next-line prettier/prettier
person.friends = [{name: 'Chris', age: 46}, {name: 'Dom', age: 43}]
console.log(person)
// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = person.friends[0].name
console.log(bestFriend)
// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
