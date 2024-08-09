import { Injectable } from "@angular/core";


@Injectable({providedIn : 'root'})

export class PostService{
    postList : Array<any> = [
        {id:1,PostTitle : "Post 1"},
        {id:2,PostTitle : "Post 2"},
        {id:3,PostTitle : "Post 3"},
        {id:4,PostTitle : "Post 4"},
        {id:5,PostTitle : "Post 5"},
        {id:6,PostTitle : "Post 6"},
    ]

    addNewData(data : object){
        this.postList.push(data);
    }
}