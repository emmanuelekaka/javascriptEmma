//functions usage like classes.
function User(email, name){
    this.email= email
    this.name = name
    this.online = false
    this.login=()=>{
        console.log(`${this.email} just logged in`)
        return this
    }
    this.logout=()=>{
        console.log(`${this.email} logged  out`)
        return this
    }
    
}
//This works with fuction literals not arrows
User.prototype.setOnline = function(){
        this.online = true
}

function Admin(...args){
    User.apply(this, args)
    this.role = 'super admin'
}

Admin.prototype = Object.create(User.prototype)
let user1 = new User('ekaka@gmail.com', 'ekaka')
let user2 = new User('emmanuel@gmail.com', 'emma')
let user3 = new Admin('ekakashean@gmail.com', 'eranman')
user3.login()
user1.login()
user1.setOnline()
console.log(user1.online)