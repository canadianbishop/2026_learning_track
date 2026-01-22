type Input = string | number | boolean | {name:string};

const formatValue = (val:Input):void =>{

      typeof val === 'string' ? console.log(val.toUpperCase()):
      typeof val === 'number'? console.log(val * 10):
      typeof val === 'boolean' && val === true? console.log('YES') :
      typeof val === 'boolean' && val === false? console.log('NO') :
      console.log( `user: ${val.name}`)

};


const fellas : Input[] = ['fan', 46, true, {name:'ayoola'}];


fellas.forEach(val =>{
      formatValue(val);
});


// type narrowing 

type item = string | number | boolean | string[]| {id:number, name:string}|null;

function handleItem(val:item):void{
    typeof val === 'string'? console.log(val.toLocaleLowerCase()):
    typeof val=== 'number'? console.log(val*val):
    typeof val=== 'boolean'? console.log('TRUE'):
    typeof val === 'boolean' && val === false?('FALSE'):
    Array.isArray(val)? console.log('array lenght: ', val.length, val.forEach(val=> console.log(val.toUpperCase()))):
    val === null? console.log('there is nothing here'):
    console.log(`User: ${val.id} - ${val.name}`);
}


function getValue(val:item):number | string| boolean| undefined{
    if(typeof val ===  'string'){
      return val.length
    }else if(typeof val === 'number'){
      return val/2
    }else if(typeof val === 'boolean' ){
      return  val
    }else if(Array.isArray(val)){
      return val.length
    } else if(val === null){
      return undefined
    }else{
      return val.name
    }
};


// generics


function getFirst<T>(arr: T[]): T | undefined{
  
      if(!arr.length){
            return undefined
      }else{
            return arr[0];
      }
       
};


function wrapInArr<T>(val: T): T[]{
   return [val]
};

interface Product{
      id:number,
      name: string,
      price: number
}


function findBId<T extends {id:number}> (val:T[], id:number): T | undefined{
  
     return val.find(val => val.id=== id)
}



// more on typeguards  and custom type predicates

type Payload = string| number | {id:string, score:number};

function isScorePayload(val:Payload): val  is {id:string, score:number}{
   return typeof val === 'object' && val !== null && 'id' in val
};

function handlePayload(val:Payload):void{
   if(typeof val === 'string' ){
     console.log(val.toUpperCase())
   }else if(isScorePayload(val)){
     console.log(`id: ${val.id}  score: ${val.score}`)
   }else{
      console.log(val*2)
   }
}


// instanceof and in operator

class Book{
  constructor(public title:string){}
};

class magazine{
  constructor (public pages:number){}
};


function checkBook(item:Book|magazine):void{
  if(item instanceof Book){
    console.log(`the title of the book is ${item.title}`)
  }else{
    console.log(`you have a magazine with ${item.pages} pages`)
  }
};


// type Student = {name: string}
type Teacher = {name: string, subject:string}


function checkPerson(person:Student| Teacher){
  if('subject' in person){
    console.log('this is a teacher')
  }else{
    console.log('this is a student..')
  }
};


interface Person{
  name:string,
  age: number,
  hasCar:boolean
};

interface Student extends Person{
  matric_no: number
};


type Staff = Person & {role:string};


function checkPeron(user:Student| Staff):void{
   if('matric_no' in user){
    console.log('this user is a student')
   }else{
    console.log('this user is a staff')
   }
};


// partial

let personOne:Person={
  name: 'bishop',
  age: 57,
  hasCar: true
};

function updatePerson(val:Partial<Person>):Person{
  return {...personOne, ...val}
  
}


updatePerson({name:'ayoola'});


// readOnly

let personTwo: Readonly<Person> ={
  name: 'ceo',
  age:39,
  hasCar: true
};


// personTwo.age = 39


// required

interface Car{
  brand:string,
  year:number,
  bluetooth?: boolean,
  color: string
};




const lexus: Car = {
  brand: 'toyota',
  year:2003,
  bluetooth: true,
  color: 'yellow'
};
const bmw: Car = {
  brand: 'i6',
  year:2003,
  bluetooth: false,
  color: 'blue'
};
const benz: Required<Car> = {
  brand: 'is200',
  year:2003,
  bluetooth: true,
  color: 'yellow'
};



// pick..

interface Car{
  brand:string,
  year:number,
  bluetooth?: boolean,
  color: string
};


const justName: Pick<Car, 'brand' | 'year'>  = {
   brand:'toyota', 
   year: 3747
};

// Omit

interface Registration{
  name:string,
  email:string,
  id: number
};

type registerPayload = Omit<Registration , 'id'>;

function registerUser(user:registerPayload){
  console.log(`user ${user.name} created`)
};


registerUser({
  name: 'bishop',
  email: 'bish@gmail.com'
});



// mini exercise ..

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
  role: "admin" | "teacher" | "student";
};

type UserPreview = Omit< User, 'email' | 'age'>;

function identifyUser(user:UserPreview){
  console.log( `${user.name} is ${user.role}`)
};



// record;


