interface User {
      id: number;
      name: string;
      profile: {
        age: number;
        bio: string;
        social?: {
          twitter?: string;
          github?: string;
        };
      };
    };


    function getAges(users: User[]): number[] {
    return users.map(({profile})=> profile.age);
    }
 
    

    function getAdultUsers(users:User[]){
      return users.filter(({profile: {age}})=> age > 30 )
    };

    function getBios(users:User[]):string[]{
       return users.map(({profile:{bio}}) => bio)
    };

    function getAverage(users:User[]):number{
     const sum = users.reduce((count, user)=> {
           return user.profile.age + count
      },0);

      return sum/ users.length

    };


    