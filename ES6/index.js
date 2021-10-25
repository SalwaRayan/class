// 1 - Push sans push

let fruits = ['Apple','Orange','Banana']

fruits = [...fruits, 'Raspberry']

console.log(fruits)
console.log("")

// 2 - Unshift sans unshift

fruits = ['Apple','Orange','Banana']

fruits = ['Raspberry', ...fruits]

console.log(fruits)
console.log("")

// 3 - Array concatenation

const arr1 = ['A', 'B', 'C']
const arr2 = ['X', 'Y', 'Z']

let array = [...arr1, ...arr2]

console.log(array)
console.log("")

// 4 - Objects

const user = {
  age: 10,
  eyes: "vert",
  legs: 2,
  arms: 2,
  hair: "long",
  caracterstique: "gras du bide",
  nose: "petit nez",
  ears: "grandes oreilles",
  glasses: true,
  sosie: "Sarkozy"
}

const bobby = {
  ...user,
  firstName: "Bobby"
}

console.log(bobby)
console.log("")

// 5 - forEach

const numbers1 = [1, 2, 3, 4, 5, 6]

numbers1.forEach(number => {
  console.log(number)
})

console.log("")

// 6 - filter

const numbers2 = [1, 2, 3, 4, 5, 6]

const filteredNums = numbers2.filter(number => number % 2 !== 0)

console.log(filteredNums)
console.log("")

// 7 - map

const numbers3 = [1, 2, 3, 4, 5, 6]

const squares = numbers3.map(number => number * number)

console.log(squares)
console.log("")