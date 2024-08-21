import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-hooks';

  inputVal : string = ''
  // inputVal : string[] = ['Hello','Hi There',]

  toDestroy : boolean = true

  constructor(){
    console.log("App Component constructor is called")
  }

  onBtnClicked(inputEl : HTMLInputElement){
    this.inputVal = inputEl.value
    // this.inputVal.push(inputEl.value)
    //console.log(this.inputVal)
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit hook of AppComponent called")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked hook of AppComponent called")
  }

  DestroyComponent(){
    this.toDestroy = ! this.toDestroy
  }
}
