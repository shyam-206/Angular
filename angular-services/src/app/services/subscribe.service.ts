import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  constructor() { }

  OnSubscribeClicked(type : string){
    
    alert("Thank you for " + type + " subscription .You can access the service now") 
  }

}
