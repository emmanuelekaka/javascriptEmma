const names = ['John', 'Joseph', 'Jesse', 'Patel']
for(let l of names){
    console.log(l)
}
let numbers = [1,2,3,4,5,6,7,8]
let Person ={
    name: 'Emma',
    age:34,
    email: 'ekakashean@gmail.com'
}
let People = [
    {
        name: 'Emma',
        age:30,
        email: 'ekakashean@gmail.com'
    },
    {
        name: 'Ekaka',
        age:30,
        email: 'ekaka@gmail.com'
    },
    {
        name: 'Swaibu',
        age:20,
        email: 'swaibu@gmail.com'
    }
]
//using reduce to sum up elements
console.log(People.reduce((acc,a)=>{
    return acc+a.age
},0))
//using reduce to put elements in an array
console.log(People.reduce((acc,a)=>{
    if (a.age ==30){acc.push(a.name)}
    return acc
        
},[]))
//using a map function to change names to upper case and return an array of the names
console.log(People
    
    .map(a =>a.name.toUpperCase())
    
)
const item ={
    category:{
        cat:'house hold',
        season:'Rainy'

    },
    overview:{
        rating:3,
        number:76
    }
}
//interating through the loop using forEach
numbers.forEach(element => {
    console.log(element)
})
//here u can ignore iterating through a loop to obtain  indicies
for(let k in numbers){
    console.log(k)
}
//sorting numbers in javascript
console.log(numbers.sort((a,b)=> a-b))

