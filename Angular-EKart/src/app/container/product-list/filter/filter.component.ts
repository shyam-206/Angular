import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input()
  all = 0

  @Input()
  inStock = 0

  @Input()
  outOfStock : number = 0

  @Output()
  selectedFilterBtnChanged : EventEmitter<string> = new EventEmitter<string>()

  selectedFilterBtn : string = 'All'

  onSelectedFilterBtnChanged(){ 
    console.log("SelectedFilterbtnChanged event Raised")
    this.selectedFilterBtnChanged.emit(this.selectedFilterBtn)
  }
}
