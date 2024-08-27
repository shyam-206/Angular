import { Component } from '@angular/core';
import { interval } from 'rxjs';


@Component({
  selector: 'app-unsbscribe',
  templateUrl: './unsbscribe.component.html',
  styleUrls: ['./unsbscribe.component.css']
})

export class UnsbscribeComponent {

  counter = interval(1000)
  data : number[] = []
  subscriber1 : any

  OnSubscribe(){
    this.subscriber1 =  this.counter.subscribe((val) => {
      this.data.push(val)
    })
  }

  OnUnSubscribe() {
    // Unsubscribe from the observable to stop receiving data
    if (this.subscriber1) {
      this.subscriber1.unsubscribe(); // Fixed the typo here
    }
  }
}
