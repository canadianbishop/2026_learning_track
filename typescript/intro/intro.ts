let name = 'ayoola bishop';
let number = 3857

console.log(name.toUpperCase());
console.log(number);



// functions

function sum ( num:number): number {
       return  num + 3;
}


sum(7);

function getUpper(val:string){
  return val.toUpperCase();   
}


// a function that returns either one of two datatypes


const returnVal = (val:number) :number | boolean=> {

      if(val > 5){
         return true
      }

      return val + 3
      
}

let age = 29;

const birthday = '10-9-1993';

age = 30;


function calYearOfBirth(age:number): number{
  const currentYear = new Date().getFullYear();
  return currentYear - age;
}


calYearOfBirth(47)



export {}