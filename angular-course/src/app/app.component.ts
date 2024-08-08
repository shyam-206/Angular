import { Component, ViewChild } from '@angular/core';
import { PostComponent } from './post/post.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-course';
  message : string = ""
  parentMessage : string = "Input From Parent to Child"

  @ViewChild(PostComponent) childComponent !: PostComponent;
  constructor(){
    //console.log(this.childComponent)
  }

  UserName : string = '';
  OnKeyUp(){
    console.log(this.UserName)
    this.message = this.UserName
    this.UserName = ""
  }

  ngAfterViewInit(){
    //console.log(this.childComponent)
    //this.message = this.childComponent.childMessage
  }

  recivedMessage(msg : string){
    this.message = msg
  }
  
  postTitle : string = ""
  postDetail : string = ""
}
