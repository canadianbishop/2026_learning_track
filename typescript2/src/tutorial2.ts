import { readonly, z}from 'zod'
import posts from './apiTask';
// type Student = {
//       name: string;
//       study: () => void;
//     };
    
    type User = {
      name: string;
      login: () => void;
    };
    
    type Person = Student | User;
    
//     const randomPerson = (): Person => {
//       return Math.random() > 0.5
//         ? { name: 'john', study: () => console.log('Studying') }
//         : { name: 'mary', login: () => console.log('Logging in') };
//     };
    
//     const person = randomPerson();

//    function isStudent(val: Person): val is Student {
//      return (person as Student).study !== undefined
//    };



//    if(isStudent(person)){
//       person.study()
//    }else{
//       person.login()
//    }

//    discriminated union


type IncrementAction = {
      type: 'increament'
      amount: number;
      timestamp: number;
      user: string;
    };
    
    type DecrementAction = {
      type: 'decrement'
      amount: number;
      timestamp: number;
      user: string;
    };
    
    type Action = IncrementAction | DecrementAction;

    function reducer(val:number, action: Action){
      switch(action.type){
            case 'decrement' :  
            return val - action.amount;
            case 'increament': 
            return val + action.amount;
            default :
            const unexpectedAction:never = action;
            throw new Error(`unexpected action: ${unexpectedAction}`)
      }
    };

//      generics


interface Genericpersons<T>{

      value:T;
      getValue: ()=> T
}

const genPerson:Genericpersons<string>={
      value: 'hellow eo',
      getValue() {
            return this.value
      },
}


async function someFunc(): Promise<string>{
      return 'thie'
}

const result = someFunc();

function genArr<T>(length:number, values:T): T[]{
      let result: T[] = [];
      result = Array(length).fill(values);
      return result
};



function pair<T, U>(val:T, num:U):[T,U]{
 return [val,num]
}

function processValue<T extends string | number>(val:T):T{
  return val
}


// type connstranint


type Car = {
      brand: string;
      model: string;
    };
    
    const car: Car = {
      brand: 'ford',
      model: 'mustang',
    };
    
    type Product = {
      name: string;
      price: number;
    };
    
    const product: Product = {
      name: 'shoes',
      price: 1.99,
    };
    
    type Student = {
      name: string;
      age: number;
    };
    
    const student: Student = {
      name: 'peter',
      age: 20,
    };

    function printName<T extends Student>(val:T){
      return val.name
    };


//     fetching data with ts

const tourSchema = z.object({
      id: z.string(),
      info: z.string(),
      Image: z.string(),
      price: z.string(),
      name: z.string()

})
// interface Fetched{
//    id:string,
//    info: string,
//    image: string,
//    name:string,
//    price:string
// }

type Fetched = z.infer<typeof tourSchema>;


const urls= 'https://www.course-api.com/react-tours-project'

async function fetchData(url:string): Promise<Fetched[]>{
  try {
    const response = await fetch(url);
    if(!response.ok){
      throw new Error(`http error status: ${response.status}`)
    }
    const rawData:Fetched[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);

    if(!result.success){
      throw new Error (`invalid data: ${result.error}`)
    }
      
    return result.data


  } catch (error) {
     if(error instanceof Error){
      console.log(error.message);
      return []
     }
     console.log('there was an error');
     return []
  }
};

const tours = await fetchData(urls);

// tours.map(tour => console.log(tour.name))

posts.map(post => console.log(post.title))