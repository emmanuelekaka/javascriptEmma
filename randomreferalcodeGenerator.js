// const random = '1234567890'
// const punctuations = '!@#$%^&()}{_-~/?' for future use
const alphabet ='a1A0bB7cC9Dd4EeF8fGgHh2Iij3JkK5lLmMnNoOpP6qQR0rsSTtUuVvWwxXyYzZ'
let referalCode=''
for(let num=1;num<7;num++){
     referalCode +=alphabet[Math.floor(Math.random()*alphabet.length)]
}
console.log(referalCode)

//functional approach
const generateReferalCode = ()=>{
    const choice ='a1A0bB7cC9Dd4EeF8fGgHh2Iij3JkK5lLmMnNoOpP6qQR0rsSTtUuVvWwxXyYzZ'
    let referalCodeEcho=''
    for(let num=1;num<7;num++){
     referalCodeEcho +=choice[Math.floor(Math.random()*choice.length)]
    }
    return referalCodeEcho

}
console.log(generateReferalCode())


