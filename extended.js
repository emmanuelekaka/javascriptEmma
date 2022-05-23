class User{
    #online = true
    constructor(email, name){
        this.email = email
        this.name = name
    }
    login(){
        console.log(`${this.email} just logged in`)
        // console.log(`${this.email} is ${this.online}`)
        return this
    }
    logout(){
        console.log(`${this.email} logged out`)
        return this
    }

}
let users = []
class Admin extends User{
    deletUser(user){
        users = users.filter(u=>{
            return u.email != user.email 
        })

    }

}
let user1 = new User('ekaka@gmail.com', 'ekaka')
let user2 = new User('emmanuel@gmail.com', 'emma')
let admin = new Admin('shaun@gmail.com', 'shaun')
users = [user1, user2, admin]
admin.deletUser(user1)
admin.login()
console.log(users)
user2.login().logout()
