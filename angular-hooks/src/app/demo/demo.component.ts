import { Component ,Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  title : string = "Demo Component"
  @Input() message !: string 

  constructor(){
    console.log("Demo Component constructor is called")
    console.log(this.title)
    console.log(this.message)
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("ngonChanges hook is called")
    console.log(changes)
  }
}
