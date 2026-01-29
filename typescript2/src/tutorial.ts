type Tax= string | number;

function calReturns(val:Tax) :number{
  if(typeof val=== 'string'){
      return Number(val) * 2;
  } 
  return val *2
};


calReturns('58');

let requestStatus: 'pending'| 'success' | 'error' =  'pending';


const books = ['183', 'lord of the rings', 'things fall apart'];

let foundBook: string | undefined;


for(let book of books){
      if(book === '183'){
            foundBook = book;
            break;
      }
}

foundBook?.length



interface Items{
     title:string,
     cost?:number 
}

let book:Items = {title:'book', cost:20};
let pen:Items = {title:'pen', cost:38};
let notebook:Items= {title:'things'};


let list:Items[]= [book, pen,notebook];

const names:Array<string>= ['john', 'bishop', 'ola'];

function checkName(name:string):boolean{
  let nameExist = names.find((user)=>{ return user === name});;
  if(nameExist){ 
    return true
  } 
  return false
}


function calCulatePrice(  price:number =58, discount?:number ){
   if(discount){
      return price -discount
   }  
   return price
};

let priceAfterDiscount = calCulatePrice(100, 80)

//  rest parameters;


const  sum = (word:string, ...number:number[]): string=>{
   const doubled = number.map(num => num * 2);
   const sum = doubled.reduce((count, number)=> {return number + count}, 0);

   return  `${word} ${sum}`
};


let result = sum('the sum is', 1,3,4,5);


function processInput(val: string| number): void{
  if(typeof val === 'string'){
    console.log(val.toUpperCase())
  }else{
    console.log(val * 2)
  }
}


// destructuring an object.

function createEmployee({id}: {id:number}): {id:number, isActive:boolean}{
  return {
    id: id, 
    isActive: id% 2 === 0
  }
};

type User= {
  name:string,
  email?:string

}

interface ApiResponse<T>{
  data: T;
  error?: string;
}


const users:User[] = [{name: 'bish', email:'bish@gmail.come'}]


const response: ApiResponse< User[]> ={
  data: users,
}

// type guard

type someVal = string | number| boolean;

let val:someVal;

const random = Math.random();

val = random < 0.33 ? 'hello' : random < 0.66 ? 1234 :  true;



function checkVal(val: someVal): someVal{
 if(typeof val === 'string') {
  return val.toLocaleLowerCase()
 }else if(typeof val === 'number'){
  return val.toFixed(2);
 }else{
  return `boolean : ${val} `
 }
}

checkVal(val);



type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal = Dog | Cat;


function makeSound(animal: Animal){
  if(animal.type === 'dog' ){
     animal.bark()
  }else{
    animal.meow()
  }
};


function printLenght(str: string | null | undefined){
  if(str){
     console.log(str.length)
  }else {
    console.log('no')
  }
}


try {
  throw new Error('this is error message')
  
} catch (error) {
  if(error instanceof Error){
    console.log(error.message)
  }else{
    console.log('unkown')
  }
}


function checkInput(input: Date | string){
  if(input instanceof Date){
    return input.getFullYear()
  }

  return input;
}

checkInput(new Date())

