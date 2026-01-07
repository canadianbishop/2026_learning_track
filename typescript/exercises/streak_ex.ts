// day 4 

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

let users:Array<User>= [
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
      name: 'fred',
      role: Roles.ADMIN,
      isActive: true
    },   
    {
      id: '124',
      name: 'jane',
      role: Roles.CLIENT,
      isActive: false
    },   
]


function printUserRole(user:Array<User>):void{

      user.forEach(user=>{
            console.log(`${user.name} (${user.role}) is ${user.isActive}`)
      })

}


const usersOnly = users.map(user=> user.name);

const activeUsers:Array<User> = users.filter(user => user.isActive === true);
const admins :Array<User> =  users.filter(user => user.role==='ADMIN');
const emailVerifiedUsers :Array<User> = users.filter(user=> user.email !== undefined);

console.log(activeUsers, admins,emailVerifiedUsers);

function getUserByRole(role:Roles): User[]{
  let definedRoles = users.filter(user=> user.role === role);
  return definedRoles;
}

getUserByRole(Roles.ADMIN)
export{}