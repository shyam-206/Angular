import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-angular-rxjs',
  templateUrl: './angular-rxjs.component.html',
  styleUrls: ['./angular-rxjs.component.css']
})

export class AngularRxjsComponent {
  
  constructor(){

  }

  ngOnInit(){
    const obsTest$ = new Observable( observer => {
        console.log("printed from observer")

        //similar to the returning the function but we used the next method..
        observer.next("Returned From Observerable")
        observer.next("Returned statements 2 From Observerable")
    }).subscribe(value => {
      //for the returning value use the inside the subscribe
      console.log(value)
    })
  }
}
