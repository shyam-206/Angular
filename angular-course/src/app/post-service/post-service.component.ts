import { Component, Injectable } from '@angular/core';
//import the service
import { PostService } from '../Services/post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-post-service',
  templateUrl: './post-service.component.html',
  styleUrls: ['./post-service.component.css'],
  // providers : [PostService]
})

@Injectable({providedIn : 'root'})

export class PostServiceComponent {

  //local variable 
  posts : Array<any> = []

  /*
  constructor(){
    //for the access of the service method 
    //create the object 
    let postService = new PostService()

    //now you can access the all method of this service  and 
    //after that the value of the postList assign to local variables
    this.posts =  postService.postList 

    console.log(this.posts)
  }
  */

  //using DI
  constructor(private postService : PostService ){
    this.posts = postService.postList
  }

  addNewData(){
    let newPost : Post = {
      id : 7,
      PostTitle : "Post 7"
    }

    this.postService.addNewData(newPost)
  }
}
