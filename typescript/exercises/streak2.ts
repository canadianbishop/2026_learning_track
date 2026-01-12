type Input = string | number | boolean | {name:string};

const formatValue = (val:Input):void =>{

      typeof val === 'string' ? console.log(val.toUpperCase()):
      typeof val === 'number'? console.log(val * 10):
      typeof val === 'boolean' && val === true? console.log('YES') :
      typeof val === 'boolean' && val === false? console.log('NO') :
      console.log( `user: ${val.name}`)

};


const fellas : Input[] = ['fan', 46, true, {name:'ayoola'}];


fellas.forEach(val =>{
      formatValue(val);
});


// type narrowing 

type item = string | number | boolean | string[]| {id:number, name:string}|null;

function handleItem(val:item):void{
    typeof val === 'string'? console.log(val.toLocaleLowerCase()):
    typeof val=== 'number'? console.log(val*val):
    typeof val=== 'boolean'? console.log('TRUE'):
    typeof val === 'boolean' && val === false?('FALSE'):
    Array.isArray(val)? console.log('array lenght: ', val.length, val.forEach(val=> console.log(val.toUpperCase()))):
    val === null? console.log('there is nothing here'):
    console.log(`User: ${val.id} - ${val.name}`);
}


function getValue(val:item):number | string| boolean| undefined{
    if(typeof val ===  'string'){
      return val.length
    }else if(typeof val === 'number'){
      return val/2
    }else if(typeof val === 'boolean' ){
      return  val
    }else if(Array.isArray(val)){
      return val.length
    } else if(val === null){
      return undefined
    }else{
      return val.name
    }
};


// generics


function getFirst<T>(arr: T[]): T | undefined{
  
      if(!arr.length){
            return undefined
      }else{
            return arr[0];
      }
       
};


function wrapInArr<T>(val: T): T[]{
   return [val]
};

interface Product{
      id:number,
      name: string,
      price: number
}


function findBId<T extends {id:number}> (val:T[], id:number): T | undefined{
  
     return val.find(val => val.id=== id)
}



