console.log("Hello guys")

// single line comment
/*
These are mult line comments and they 
indeed
*/

//var is used for values which will keep  on changing and its global
//U should avoid using it
var name= "Emma"
name = "Joseph"
console.log(name)

let plant= "egg plant"
//let values can be reassigned.
console.log(plant)

const fruit = "apple"
//const values cant be reassigned
console.log(fruit)

//Data types.
//strings, lists, integers, floats, boolean, json objects can be imported,most of these are type infered. 

if (fruit=="apple"){
    console.log("Apple is present")
}else{
    console.log("apple is absent")
}

const action = "hit"
switch (action){
    case "hit":
        console.log("He hit it")
        break
    case "drill":
        console.log("He drilled it")
        break
    default:
        console.log("Abscent")
        break
}