let scores : Array<number> = [29,93,2,4];

const updatedScores = scores.map((score) : number =>{
  return score < 10 ? score + 5 : score
});


console.log(updatedScores)


function generateName(val:string | number):string |boolean{
      if(typeof val === 'string'){
            return `your name is ${val}`
      }

      return false
}


// a function that returns void is a function that just does something and never return anything

function sayTask():void{
      console.log('i am learning typescript')
}

sayTask();

// type alias


type User = {
      readonly id: number;
      name: string;
      email?: string;
}


const person: User = {
      id:384,
      name: 'bishop',
      email: 'bish@gmail.com'
}

function message(user:User):void{
   console.log( `welcome user ${user.name}`)
}



export {}