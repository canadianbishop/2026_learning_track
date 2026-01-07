class User{

      protected _token = 1
      readonly city:string = 'lagos'
      constructor(
             public name:string,
               public email:string, 
             ){ 
      }

       private printUser(){
            return `${this.name} is a user`
      }

      get getToken():number{
         return  this._token
      };

      set UpdateToken(userToken: string){
           this.getToken + userToken
      }
}

const  bishop = new User('ayoola', 'ayoola@gmail.com');


// inheritance

class subUser extends User{
      isfamily :boolean = true
      changeToken(){
            this._token = 6
      }
}
// bishop.city = 'lagos';

console.log(bishop)