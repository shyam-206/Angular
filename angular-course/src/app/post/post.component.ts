import { Component,EventEmitter,Input, Output } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  title : string = 'List Of Post'
  messagePost : string = 'Message post' 

  childMessage : string = "From Child Component"

  outputChildMessage : string = "Message from child component via outpu and event emit"
  
  @Input() fromParent : string = "";
  
  messageFromPostToPostList : string = "Message pass from Post To Post List"
  @Output() MessageEvent = new EventEmitter<string>()
  sendMessage(){
    this.MessageEvent.emit(this.outputChildMessage)
  }

  constructor(){

  }

  ngOnInit() : void{

  }
}
