interface UserS{
      readonly id : number
      email: string,
      password: string,
      welcome(): string,
      createcoupon: ()=> number
      
}


const worker:UserS = {
      id:37, 
      email: 'bish@gmail.com',
      password:'fuckme',
      welcome: ()=>{
            return 'fuck mea'
      },

      createcoupon(){
            return 1234
      }
};



enum Roles{
      ADMIN = 'ADMIN',
      STAFF = 'STAFF',
      CLIENT = 'CLIENT'
};


interface User{
      id: string | number,
      name: string,
      role: Roles,
      email?: string,
      isActive: boolean
};

const users:Array<User>= [
    {
      id: '123',
      name: 'bishop',
      role: Roles.ADMIN,
      email: 'bish@gmail.com',
      isActive: true
    },   
    {
      id: '124',
      name: 'clan',
      role: Roles.STAFF,
      email: 'clam.com',
      isActive: false
    },   
    {
      id: '124',
      name: 'clan',
      role: Roles.CLIENT,
      isActive: true
    },   
]


function printUserRole(user:Array<User>):void{

      user.forEach(user=>{
            console.log(`${user.name} (${user.role}) is ${user.isActive}`)
      })

}

console.log(printUserRole(users))
export{}