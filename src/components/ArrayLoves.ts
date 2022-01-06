import { makeAutoObservable } from 'mobx';
import Picture from './Picture';

export interface picture{
    count: number,
    date: string,  
    creator: string,
    id:string, 
    category:string
}
export class ArrayLoves {
  public lovepictures: picture[];


  constructor() {
    this.lovepictures = [];
    makeAutoObservable(this);
  }
  addpicturelove(p: picture) {
    if(!this.isExist(p)){
    this.lovepictures.push(p);
    }
  }
  delpicturelove(p: picture) {
    const aaa= this.lovepictures.filter(b => b.id==p.id);
    if(aaa.length!==0){
      const i=this.lovepictures.indexOf(aaa[0]);
      this.lovepictures.splice(i,1);
      
    }  

  }
  delpictureloveById(p: string) {
    const aaa= this.lovepictures.filter(b => b.id==p);
    if(aaa.length!==0){
      const i=this.lovepictures.indexOf(aaa[0]);
      this.lovepictures.splice(i,1);
      
    }  

  }

  isExist(pi: picture) { 
     const aaa= this.lovepictures.filter(b => b.id==pi.id);
    return(aaa.length!==0);
   }
}
export const ArrLoves = new ArrayLoves();
