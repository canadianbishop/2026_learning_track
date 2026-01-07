interface User{
      readonly id : number
      email: string,
      password: string,
      welcome(): string,
      createcoupon: ()=> number
      
}

interface Admin extends User{
      role: 'admin'
}

const worker:User = {
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


const person: Admin = {
      id:37,
      email: 'admin@gmail.com',
      password: 'admin34',
      role: 'admin',
      welcome: ()=>{
            return 'fuck mea'
      },

      createcoupon(){
            return 1234
      }
}



export{}