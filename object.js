
const student = {
    first: "Emma",
    last: "Ekaka",
    height: 170,
    yob:2000,
    age(){
        return 2022 - this.yob;
    },
}
console.log(student.age())
//arrow functions
const add = (a,b)=>{
    return a+b;
}
console.log(add(23,45))
const sub = (a,b)=>a-b
console.log(sub(23,45))