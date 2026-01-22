// record


type Role = 'admin'| 'editor'| 'viewer'

type Permission = Record< Role, string[]>;

let usersPermission: Permission = {
      admin: ['create', 'edit', 'delete', 'view'],
      editor: ['edit', 'view'],
      viewer: ['view']
}

console.log(usersPermission.editor);

type Users = {
  id: number;
  name: string;
  email: string;
  password: string;
};


type safeUser = Omit <Users, 'password'>;

function printUser(u:safeUser){
      console.log(u.name, u.email)
};


type SafeUsers = Record<number, safeUser>;

const safeUsers :SafeUsers = {
      1: {id:1, name:'bishope', email:'bish@gmail.com'},
      2: {id:1, name:'cana', email:'cana@gmail.com'},
};

console.log(safeUsers[2].name);


type Status = 'approved' | 'pending'| 'cancelled';

type approved = Exclude<Status, 'cancelled'>

type cancelled = Extract< Status, 'cancelled'>;

// return type..


function createUser(name:string, id :number){
      return {name:name, id:id};
};


type Myuser = ReturnType <typeof createUser>;


type MiniUser = {
      name: string,
      email: string,
      password : number
};


const User1: Readonly<MiniUser>={
      name: 'bish', 
      email: 'bish@gm', 
      password: 3939
}


type UserINput = string |null|undefined;


function modifyINput(input:NonNullable<UserINput>){
      return input.toLocaleLowerCase()
};


type Myperson = {
      name :string,
      age:number,
      address:string
};


let person20:Myperson= {
      name: 'bish',
      age:38,
      address:'vinaid street'
}

function updatePerson(person: Partial<Myperson>):Myperson{
        return {
            ...person20,
            ...person
        }
};

updatePerson({age: 48});

function savePerson (person: Required<Myperson>){
   console.log( person)
};


// exercises


let original : Readonly<Myperson> ={
      name: 'king',
      age:38,
      address: 'bevelty hills'
};

original.name = 'clara';

function fillMissingPerson (person: Partial<Myperson>): Required<Myperson>{
      return{...person20,
            ... person
      }
}