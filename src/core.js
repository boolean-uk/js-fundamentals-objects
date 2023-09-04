// Don't change the person variable directly on line 2
const person = { age: 32, size: 'Small' }

// 1. Give the person object a name property with the value Matt
person.name = 'Matt'
console.log(person);

// 2. Remove the size property from the person



// 3. Increase the person's age by 11
person.age = age + 11
console.log()
// 4. Add an instruments property to the person, initialised as an empty array
person.instrument = []
console.log(instrument);

// 5. Add the following instruments to the persons instruments array: Guitar, Piano, Vocals
person.instrument =['Guitar', 'Piano', 'vocals']
console.log(instrument);

// 6. Using an index on the instruments array, set the mainInstrument variable below
// to the third instrument in the array
const mainInstrument = [2]
console.log(mainInstrument)

// 7. Add a profession property to the person, which is an object
person.profession = {}
console.log(profession)
// 8. Add a name property to the profession object with the value Musician
profession.name= "Musician"
console.log(profession)
// 9. Add a friends property to the person, which is an empty array
person.friend=[]
console.log(friend)

// 10. Add two objects to the persons friends array with the following properties:
// Friend one: name - Chris, age - 46
// Friend two: name - Dom, age - 43
person.FriendOne = {
  name:'chris',
  age: 46
}
console.log(FriendOne)
person.FriendTwo = {
  name: 'Dom',
  age: 43
}
console.log(FriendTwo)

// 11. Using an index on the persons friends array, set the bestFriend variable below
// to the name of the first friend in the array
const bestFriend = undefined

// Don't change the code below this line
module.exports = {
  person,
  mainInstrument,
  bestFriend
}
