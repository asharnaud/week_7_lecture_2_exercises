// Review the following code. Read over the code and write detailed comments for each line of code.
//
function modify (data, callback) {
// This is to create an array to put the results in.
  var accumulator = []
// This is to loop over the array of data and push it into the empty array.
  data.forEach(function (item) {
    accumulator.push(callback(item))
  })
// Return the data that is collected inside the array.
  return accumulator
}
// This is going to return the number that is inputted plus 1.
function increment (num) {
  return num + 1
}
// This is going to return the number that is inputted minus 1.
function decrement (num) {
  return num - 1
}

var numbers = [27, 68, 40, 3, 14, 74]

// In this variable 'numbers' is going to be the data in 'modify' and increment is going to the callback so each number in the 'numbers' array will be incremented by 1 and pushed into the empty array and then returned.
var incremented = modify(numbers, increment)

// In this variable 'numbers' is going to be the data in 'modify' and increment is going to the callback so each number in the 'numbers' array will be decremented by 1 and pushed into the empty array and then returned.
var decremented = modify(numbers, decrement)

// This will print the 'numbers' array incremented using modify and increment.
console.log(incremented)

// This will print the 'numbers' array decremented using modify and decrement.
console.log(decremented)

// This exercise is made up of several mini exercises. Each exercise will use the following array of people:

var people = [
  {
    firstName: 'Finka',
    lastName: 'Takenaka',
    age: 57
  },
  {
    firstName: 'Tiriaq',
    lastName: 'Fenstermacher',
    age: 46
  },
  {
    firstName: 'Amel',
    lastName: 'Flipse',
    age: 86
  },
  {
    firstName: 'Clara',
    lastName: 'Schwartz',
    age: 27
  },
  {
    firstName: 'Vivyan',
    lastName: 'Mah',
    age: 35
  }

]

// Use map() to get an array of first and last names. EG: ["Finka Takenaka", "Tiriaq Fenstermacher", ...]
function getFullName (people) {
  return people.firstName + ' ' + people.lastName
}

var fullNameArr = people.map(getFullName)
console.log(fullNameArr)

// Use map() to create a new array of objects that only contain fullName and age properties. The fullName property should be set to the concatenation of the firstName and lastName properties. EG: [{fullName: "Finka Takenaka", age: 57}, {fillName: "Tiriaq Fenstermacher", age: 46}, ...]
function newObject (people) {
  return {
    fullName: (people.firstName + ' ' + people.lastName),
    age: people.age
  }
}

var newArray = people.map(newObject)
console.log(newArray)

// Use filter() to get an array of all people younger than 50.

var youngerThanFifty = people.filter(function (people) {
  return people.age < 50
})

console.log(youngerThanFifty)

// Use reduce() to find the oldest person.

function findOldest (prevVal, currentVal) {
  if (prevVal.age > currentVal.age) {
    return prevVal
  }
  return currentVal
}

var oldestPerson = people.reduce(findOldest, 0)

console.log('oldest!!!!', oldestPerson)
