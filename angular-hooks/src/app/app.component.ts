import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hooks';

  inputVal : string = ''

  constructor(){
    console.log("App Component constructor is called")
  }

  onBtnClicked(inputEl : HTMLInputElement){
    this.inputVal = inputEl.value
    console.log(this.inputVal)
  }
}
