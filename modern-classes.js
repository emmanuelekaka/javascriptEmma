const k =0

class User{
    
    constructor(username, email){
        this.username = username
        this.email = email
        this.count +=1

    }
    register(){
        console.log(`${this.email} is registered`)
    }
    //static key word can't be changed
}
class Admin extends User{
    constructor(username, email, member){
        super(username, email,count)
        this.member = member
    }
}
let user1 = new Admin('ekaka', 'ekakashean@gmail.com', true)
let user2 = new Admin('ella', 'ella@gmail.com', false)
console.log(user1.email)
console.log(user1.count)
