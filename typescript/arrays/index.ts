const classmates: string[]= ['ayo', 'lekan', 'king'];

// an array that has different types of data types

const pupilsAndScores : (string | number)[]= ['shfh', 28,39,39];


// an array of objects with a specific  type

type User = {
      name: string;
      email: string;
      isPaid: boolean
}

let users: User[] = [];

let user1:User = {
      name: 'ayoola',
      email: 'ayo@gmail.com',
      isPaid: false
};


users.push(user1);


// tupples

// this is a type of array that lets you structure what kind of
//  element should be allowed at each positions  in the array


let tUsers: [string , number, boolean] = ['stefan', 38, true];

let  pupils : readonly string[] =  ['bish'];



export {};
