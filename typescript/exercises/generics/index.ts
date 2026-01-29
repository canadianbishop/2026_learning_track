function printName<T extends {name:string}>(obj:T){
      console.log(obj.name)
}


function getProp<T, U extends keyof T>(obj:T, prop:U):T[U]{
      return obj[prop]
}

const user = { name: "Bish", age: 20 };

getProp(user, 'age');

interface User{
      name:string,
      age:number,
      email?:string
}

type emailType = User['email']

const email:emailType = undefined


interface ApiResponse<T>{
      data:T,
      success:boolean
}

const response:ApiResponse<User[]>= {
      data:[
            {name:'bish', age:38}
      ],
      success:true
};


function mergeObjects<T, U>(obj1: T, obj2: U): T & U {
return {...obj1, ...obj2}
}


const nums = [1,2,4,4,5,6]

for(const num of nums){
      console.log(num)
}



interface User {
      id: number;
      name: string;
      age: number;
      email?: string;
      isActive: boolean;
    }
    
    const users: User[] = [
      { id: 1, name: "Bish", age: 38, isActive: true, email: "bish@gmail.com" },
      { id: 2, name: "Mary", age: 25, isActive: false },
      { id: 3, name: "John", age: 31, isActive: true, email: "john@gmail.com" },
      { id: 4, name: "Alice", age: 19, isActive: false }
    ]

    const above30:User[] = users.filter((user:User)=> user.age > 30);

    const activeUsersEmails =  users.filter(user => user.email).map(user => user.email);
    const firsActive = users.find(user=> user.isActive=== false)
    const sumOfUserAge = users.reduce((count, user)=>{  
      return user.age + count
    }, 0)