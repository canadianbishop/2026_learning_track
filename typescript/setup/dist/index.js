"use strict";
class User {
    constructor(name, email) {
        this.city = '';
        this.name = name;
        this.email = email;
        this.city;
    }
    printUser() {
        return `${this.name} is a user`;
    }
}
const bishop = new User('ayoola', 'ayoola@gmail.com');
// bishop.city = 'lagos';
console.log(bishop);
