// create a person class 

// class Person{
//       constructor(
//             public name:string,
//             public email:string,
//             private _age:number
//        ){

//       }

//       get getAge():number{
//             return this._age;
//       }

//       set setAge(age:number){
//             if(age <1 ) throw new Error('age must be greater than 1');
//             this._age = this.getAge;
//       }
// }


// class Customer extends Person{
//       constructor(name:string, email:string, _age:number, public customerId:string){
//             super(name,email,_age)
//       }

//       getSummary():string{
//             return `${this.name} ${this.getAge} - customerId: ${this.customerId}`
//       }
   
//    }


//    class Admin extends Customer{
//       constructor(name:string, email:string, _age:number, customerId:string,  public permissions: string []){
//             super(name,email, _age,customerId);
            
//       }
//    }


class Person{
      constructor(
            public name:string,
            public email:string,
            private _age:number
      ){}

      get getAge():number{
            return this._age
      };
      
      set setAge(age:number){
         if(age < 1)  throw new Error('age must be at least one')
          this._age = age  
      };     
     
}


class Customer extends Person{
      constructor(name:string, email:string, _age:number, public customerId:string){
            super(name,email,_age)
      }

      getSummary():string{
            return `${this.name} (${this.getAge}) customer ID- ${this.customerId}`
      }
};


class Admin extends Person{
      constructor(
            name:string, 
            email:string,
             _age:number, 
              protected permissions: string[]
            ){
                  super(name, email, _age)
            }
           
            hasPermission(permission:string):boolean{
              return this.permissions.includes(permission)
            }
            
}


const firstCustomer = new Customer('bishop', 'bish@gmail.com',20, '123');
const secondCustomer = new Customer('king', 'king@gmail.com',0, '123');

const hr = new Admin('queen', 'queen@gmail.com', 12, ['permitted']);

const employees :(Customer |Admin) [] = [firstCustomer, secondCustomer, hr]


