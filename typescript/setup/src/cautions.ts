// IN OPERATOR
interface User{
      name:string,
      age:number,
      car:boolean
}

interface Admin{
      name:string,
      email:string,
      isAdmin:boolean
}


function checkUser(person:Admin | User |null){
      if(person){
        if('isAdmin' in person){
           console.log( person.email)
        }else{
         person.car
        }
      }
};


//  instanceOf

