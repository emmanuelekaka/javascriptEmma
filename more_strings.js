const fruit = "banana"
const fruits = 'banana,orange,apple'
//this splits basing on characters.
console.log(fruit.split(''))
//splitting by creating a list at every poing where there is a comma
console.log(fruits.split(','))

//converting an array to a string
const numbers =[1,2,3,4,5,6,7]
console.log(numbers.toString())
console.log(numbers.join('--'))
//reverse is used for reversing only an array not a string.
console.log(numbers.reverse())