const reversArray= <T> (arr:T[]):T[] =>{
   return arr.reverse()
};


interface ApiResponse<T>{
      data: T;
      error?: string
}


interface User {
      name: string,
      password: string,
      email? :string,
      age?: number
}

const users: User[] = [
      {name: 'bishop', password: 'bhsi'},
      {name: 'bishop', password: 'bhsi'},
]

const response : ApiResponse<User[]> = {
      data: users
};


function updateUser(user: Partial<User>):void{
  const updatedUsers = {...users, user};
  console.log(updateUser)
};


type SafeUsers = Pick<User, 'name' | 'email'>

const newUsers: SafeUsers= {
      name: 'bishop',
      email: 'bish@gmail'
};


const myUser: Omit<User, 'password'> = {
      name:'bish',
      email: 'bish@gm',
      age: 38
};


function getFirstEle<T>(arr: T[]): T | undefined{
   if(arr.length > 0){
      return arr[0]
   };
   return undefined
}