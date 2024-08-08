import { Component, EventEmitter, Input ,Output} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  name : string = "";

  @Input()
  val : number = 0


  @Output() 
  changed : EventEmitter<number> = new EventEmitter<number>()


  dec(){
    if(this.val > 0)[
      this.val--
    ]
    this.changed.emit(this.val)
  }

  inc(){
    this.val++;
    this.changed.emit(this.val)
  }
}
