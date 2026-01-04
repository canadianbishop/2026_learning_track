enum users {
     adimin,
     user,
     client 
}


const firstUser = users.adimin;

console.log(firstUser);


enum Roles{
      ADMIN ='ADMIN',
      STAFF = 'STAFF',
      CLIENT = 'CLIENT'
};


type UserId = string | number;

type myUsers = [string, Roles ];

let allUsers: [myUsers, UserId] [] = [
      [['bishop', Roles.ADMIN], 263],
      [['king', Roles.CLIENT], 37],
]


function logUser(user:[myUsers, UserId][]):void{
   user.forEach((user)=>{
      user.forEach((ele)=>{
           console.log(ele)
      })
   })
}

logUser(allUsers)
export{}