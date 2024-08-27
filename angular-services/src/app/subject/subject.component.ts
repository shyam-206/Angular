import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ajax } from "rxjs/ajax"


@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {

  ngOnInit(): void {
    
    // let obs = new Observable((observer) => {observer.next(Math.random())})
    
    // //subscriber 1
    // obs.subscribe((data) => {
    //   console.log(data)
    // })

    // //Subscriber 2
    // obs.subscribe((data) => {
    //   console.log(data)
    // })


    //About use of subject
    //more than 1 subscriber but all the value is same where observerable the data value change when new subscriber is subscribe the service
    const subject = new Subject()

    //subscriber 1
    subject.subscribe((data) => {
      console.log(data)
    })

    //subscriber 2
    subject.subscribe((data) => {
      console.log(data)
    })

    subject.next(Math.random())

    //AJAX Call
    const subject1 = new Subject()
    const data = ajax('https://randomuser.me/api/')

    subject1.subscribe((res) => console.log(res))
    subject1.subscribe((res) => console.log(res))
    subject1.subscribe((res) => console.log(res))

    data.subscribe(subject1)

    //behavior subject -  RxJS that requires an initial value and emits the current value to new subscribers. It's commonly used for state management or when you need to ensure that subscribers receive the last emitted value upon subscription.


    //initial value
    const behaviorSubject = new BehaviorSubject<number>(0)

    behaviorSubject.subscribe((data) => console.log(data))
    behaviorSubject.subscribe((data) => console.log(data))
    
    behaviorSubject.next(200)
  }

  private behaviorSubject = new BehaviorSubject<number>(0)
  counter !: number
  constructor(){

    //subscribe to the BehaviorSubject and update the value of counter
    this.behaviorSubject.subscribe((val) => {
      this.counter = val
    })
  }

  increment(){
    this.behaviorSubject.next(this.behaviorSubject.value + 1)
  }

  decrement(){
    if(this.behaviorSubject.value > 0){
      this.behaviorSubject.next(
        this.behaviorSubject.value - 1
      )
    }
    
  }
}
