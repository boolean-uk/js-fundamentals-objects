// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt
person.name = 'Matt'
console.log('QUESTION 1: ', person)
// 2. Remove the size property from the person
delete person.size
console.log('QUESTION 2: ', person)
// 3. Increase the person's age by 11
person.age += 11
console.log('QUESTION 3: ', person)
// 4. Add an instruments property to the person, initialised as an empty array
person.instruments = []
console.log('QUESTION 4: ', person)
// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals
person.instruments.push('Guitar', 'Piano', 'Vocals')
console.log('QUESTION 5: ', person)
// 6. Using an index on the instruments array, set the mainInstrument variable below

// to the third instrument in the array
const mainInstrument = person.instruments[2]
console.log('QUESTION 6: ', mainInstrument)
// 7. Add a profession property to the person, which is an object
person.profession = {}
console.log('QUESTION 7: ', person)
// 8. Add a name property to the profession object with the value Musician
person.profession.name = 'Musician'
console.log('QUESTION 8: ', person)
// 9. Add a friends property to the person, which is an empty array
person.friends = []
console.log('QUESTION 9: ', person)
// 10. Add two objects to the persons friends array with the following properties:
person.friends.push({ name: 'Chris', age: 46 }, { name: 'Dom', age: 43 })
console.log('QUESTION 10', person)
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43

// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = person.friends[0].name
console.log('QUESTION 11: ', bestFriend)

// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
