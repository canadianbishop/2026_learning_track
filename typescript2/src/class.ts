interface User {
      name:string,
      email: string,
      password: string
}


class CreateUser implements User{
      constructor(public name:string, public email:string, public password:string){}
}


