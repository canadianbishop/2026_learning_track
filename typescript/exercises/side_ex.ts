// create a person class 

class Person{
      constructor(
            public name:string,
            public email:string,
            private _age:number
       ){

      }

      get getAge():number{
            return this._age;
      }

      set setAge(age:number){
            if(age <1 ) throw new Error('age must be greater than 1');
            this._age = this.getAge;
      }
}


class Customer extends Person{
      constructor(name:string, email:string, _age:number, public customerId:string){
            super(name,email,_age)
      }

      getSummary():string{
            return `${this.name} ${this.getAge} - customerId: ${this.customerId}`
      }
   
   }


   class Admin extends Customer{
      constructor(name:string, email:string, _age:number, customerId:string,  public permissions: string []){
            super(name,email, _age,customerId);
            
      }
   }