// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt
person.name = 'Matt'
console.log(`Name should read Matt: ${person.name}`)
console.log('--------')

// 2. Remove the size property from the person
delete person.size
console.log(`Size should no longer show up:`)
console.log(person)
console.log('--------')

// 3. Increase the person's age by 11
person.age = person.age + 11
console.log(`Age should now be 43:`)
console.log(person)
console.log('--------')

// 4. Add an instruments property to the person, initialised as an empty array
person.instruments = []
console.log(`Instruments should be an empty array:`)
console.log(person)
console.log('--------')

// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals
person.instruments.push('Guitar', 'Piano', 'Vocals')
console.log(`Should list Guitar, Piano, Vocals: ${person.instruments}`)
console.log('--------')

// 6. Using an index on the instruments array, set the mainInstrument variable below
// to the third instrument in the array
const mainInstrument = person.instruments[2]
console.log(`Should read Vocals: ${mainInstrument}`)
console.log('--------')

// 7. Add a profession property to the person, which is an object
person.profession = {}
console.log(`Profession should be an empty object:`)
console.log(person)
console.log('--------')

// 8. Add a name property to the profession object with the value Musician
person.profession.name = 'Musician'
console.log(`Should read Musican: ${person.profession.name} `)
console.log('--------')

// 9. Add a friends property to the person, which is an empty array
person.friends = []
console.log('Friends should be an empty array:')
console.log(person)
console.log('--------')

// 10. Add two objects to the persons friends array with the following properties:
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43
person.friends.push({ name: 'Chris', age: 46 }, { name: 'Dom', age: 43 })
console.log('The Friends array should have 2 Objects inside now')
console.log(person.friends)
console.log('--------')

// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = person.friends[0].name
console.log(`Should display Chris as best friend: ${bestFriend}`)
console.log('--------')

// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
