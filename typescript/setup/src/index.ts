class User{
      email: string
      name:string
      city: string = ''
      constructor(name:string, email:string){
            this.name = name;
            this.email = email;
            this.city;
      }

      printUser(){
            return `${this.name} is a user`
      }
}

const  bishop = new User('ayoola', 'ayoola@gmail.com');

// bishop.city = 'lagos';

console.log(bishop)