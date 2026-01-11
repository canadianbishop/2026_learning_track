abstract class TakePhoto {
      constructor(
            public cameraTime:string,
            public filter:string
      ){

      }

      abstract calRunTime():void;
      deletePhoto():boolean{
       return false
      }
}

class iphone extends TakePhoto{
      constructor(public cameraTime:string, public filter:string, public photoCount:number){
         super(cameraTime, filter)   
      }
      calRunTime(): void {
            console.log('run time')
      }
}


const bish = new iphone('twice', 'grid', 5);


bish.deletePhoto()



// implements


interface Android{
      name:string,
      email: string,
      isActive(): void
}




class newUser implements Android{
      constructor(
            public name:string, 
            public email: string, 
            private isLoggedIn: boolean
      ){}

      isActive(): void {
            console.log('active')
      }
}


