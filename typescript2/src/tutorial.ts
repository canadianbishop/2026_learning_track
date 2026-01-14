type Tax= string | number;

function calReturns(val:Tax) :number{
  if(typeof val=== 'string'){
      return Number(val) * 2;
  } 
  return val *2
};


calReturns('58');

let requestStatus: 'pending'| 'success' | 'error' =  'pending';


const books = ['183', 'lord of the rings', 'things fall apart'];

let foundBook: string | undefined;


for(let book of books){
      if(book === '183'){
            foundBook = book;
            break;
      }
}

foundBook?.length



interface Items{
     title:string,
     cost?:number 
}

let book:Items = {title:'book', cost:20};
let pen:Items = {title:'pen', cost:38};
let notebook:Items= {title:'things'};


let list:Items[]= [book, pen,notebook];

const names:Array<string>= ['john', 'bishop', 'ola'];

function checkName(name:string):boolean{
  let nameExist = names.find((user)=>{ return user === name});;
  if(nameExist){ 
    return true
  } 
  return false
}


function calCulatePrice(  price:number =58, discount?:number ){
   if(discount){
      return price -discount
   }  
   return price
};

let priceAfterDiscount = calCulatePrice(100, 80)