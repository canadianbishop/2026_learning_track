type Role = "admin" | "editor" | "viewer";

interface User {
  id: string | number;
  name: string;
  isActive: Boolean;
  role: Role
};


function getActiveAdmins(users: User[]): User[]{
  const active = users.filter(user=> user.isActive && user.role === 'admin');
  return active;
 
 }
 
 
 function getActiveUsers(users: User[]): User[] {
   const activeUsers = users.filter(user=> user.isActive);
   return activeUsers;
 };
 
 function getAdmins(users: User[]): User[] {
   const admins = users.filter(user => user.role === 'admin');
   return admins
 }
 
 function getUserNames(users: User[]): string[] {
   const usernames = users.map(user => user.name);
   return usernames;
 }
 
 
 function countActiveUsers(users: User[]): number {
   const numberOfUsers = users.reduce((acc, sum)=>( sum.isActive ? acc + 1 :  acc ), 0);
   return numberOfUsers
 };
 
 function countActiveUser(users: User[]):number{
    const activeUsers = users.filter(user => user.isActive);
   return activeUsers.length
 }
 

 interface Myusers {
  id: number;
  name: string;
  profile: {
    bio: string;
    age: number;
  };
}


function getUsersAge(users:Myusers[]): number[]{
   const age = users.map(user=> user.profile.age);
   return age;
}

function oldUsers(users:Myusers[]):Myusers[]{
  const old = users.filter(user => user.profile.age > 18);
  return old
};

function getbios (users:Myusers[]): string[]{
  const bios = users.map(user=> user.profile.bio);
  return bios
}

// let users: User[] = [
//   { id: "124", name: "ayoola", email: "ayo@gmail.com", isActive: true, role: 'ADMIN' },
//   { id: "123", name: "bishop", email: "bisghop@gmail.com", isActive: false, role: 'STAFF' },
//   { id: "373", name: "ola",  isActive: false , role: 'CLIENT'},
//   { id: "573", name: "king", email:'king@gmail.com', isActive: true , role:'CLIENT'},
//   { id: "48", name: "james", email:'james@gmail.com', isActive: false, role: 'STAFF' },

// ];


// function addUser(user : NonNullable<User>): User[]{
//    let userList = [...users, user];
//    return userList;
// };



// function getUserByEmail(email:string):User| string{
//    const user = users.find(user=> user.email === email);
//    if(user) return  user;
//    return 'user not found';
// };

// function updateUser(id:string|number,update:Partial<User>):void{
//  const userId = users.find(user=> user.id === id);
//  if(userId){
//       users.map(user=> user.id === id ? {...user,...update} : user)
//  } else {
//       console.log('user not found ')
//  }

// };

// function printUserSummary(name: NonNullable<string>){
//  const username = users.find(user => user.name === name);
//   if(username){
//       console.log( `${username.name} (${username.role})} is  ${username.isActive}`)
//   }
 
// };

// // generics practice;

// function firstElement<T>(T:Array<T>) :T | undefined{
//       return T[0]
// }
// function wrapInArray<T>(val:T) :T[]{
//       return [val]
// };


// // type predicates

// function isClient(user: NonNullable<User>): user is User {
//       return typeof user === 'object' && user.role === 'CLIENT'
// };

// function alertClient (user:User): void{
//   if(isClient(user)){
//       console.log(`CLIENT ALERT: ${user.name}`)
//   }
// }