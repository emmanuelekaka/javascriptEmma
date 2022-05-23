//data types
//data types in javascript are type infered because teh compiler is madde in that it understands the types.
//strings can also be with single quotes
let a = "data"
//char
let char = 'w'
//boolean can be false or true.
let tut = false
//integers and floating same literal
let data = 0.234;
//undefined data types
let unknown
//null values
let nul = null
nul = 23;
console.log("The null value is "+nul)

// arrays in python called lists.
let names = ['Ekaka', 'Emma', 'Joy', 'Brian']
//getting the first index item
console.log(names[0])
console.log(names[1])
//adds the dreams as the last value
names.push('Dream')
//removes the last index
names.pop()
//console llogging all the items in the list
console.log(names)

//object literals also called dictionaries in other languages like python.
let Person = {name:'Ekaka', age:45}
console.log(Person.name)
console.log(Person.age)
Person.age = 32
console.log(Person.age)

//more intuitive javascript objects.
let PersonDetail = {
    name:'Ekaka Emmanuel',
    age:22,
    address:{parish:'Banda', village:'Banda'}
}
console.log(PersonDetail.name)
console.log(PersonDetail.address.parish)

//More on arrays [list of lists]
const People =[
    ['Ekaka', 12],
    ['Emmanuel', 34],
    ['John', 76],
]
console.log(People[0][0])

//Data types are used under the super set of javascript called typescript used and developed by microsoft.