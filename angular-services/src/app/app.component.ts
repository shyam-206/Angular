import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-services';

  data : any[] = []
  //1. create an observable
  myObservable = new Observable((o) => {
    setTimeout(() => { o.next(1) },1000)
    setTimeout(() => { o.next(2) },2000)
    setTimeout(() => { o.next(3) },3000)
    // setTimeout(() => { o.error(new Error('Something went to wrong.Please try again later!!'))},4000)
    //return afterwards didnot execute the after error code
    setTimeout(() => { o.next(4) },4000)
    setTimeout(() => { o.next(5) },5000)
    setTimeout(() => { o.complete() },6000)
  })

  GetAsyncData(){
    //first way
    // this.myObservable.subscribe((val : any) => {
    //   this.data.push(val)
    // },(error) => {
    //   alert(error.message)
    // },() => {
    //   alert("All the data is streamed!...")
    // })

    this.myObservable.subscribe({
      next : (val : any) => {
        this.data.push(val)
      },
      error(err) {
        alert(err.message)
      },
      complete() {
        alert("All the data is streamed!...")
      },
    })
  }
}
