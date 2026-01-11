const names: Array<string> = [];


function identity <T>(val:T):T{
 if(typeof val === 'string'){
      return val.toUpperCase() as  T;
 }

 return val;
}


const usersList = <T>(val:T[]):T[]=>{
   return []
}

function generate <T>(val:T[]):T{
      return val[3]
}