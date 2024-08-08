import { Component } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent {

  burgers = 0;
  totalItems = 0;

  constructor(){
    this.calculateTotalItems()
  }

  burgersChanged(c : number){
    this.burgers = c;
    this.calculateTotalItems()
  }
  
  calculateTotalItems(){
    this.totalItems = this.burgers 
  }
}
