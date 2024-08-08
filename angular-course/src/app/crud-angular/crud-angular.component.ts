import { Component } from '@angular/core';

@Component({
  selector: 'app-crud-angular',
  templateUrl: './crud-angular.component.html',
  styleUrls: ['./crud-angular.component.css']
})
export class CrudAngularComponent {

    name : string = ""
    email : string = ""
    address : string = ""
    
    userArray : Array<any> = []
    
    SaveData(){
      debugger
      if(this.name !== "" && this.address  !== ""  && this.address !== ""){
        let user = this.userArray.find(m => m.email === this.email)
        if(user){
          user.name = this.name
          user.email = this.email
          user.address = this.address
        }else{
          this.userArray.push({
            "name" : this.name,
            "email": this.email,
            "address" : this.address
          })
        }
        
        this.name = ""
        this.email = ""
        this.address = ""
      }else{
        alert("please enter the null value")
      }
    }

    onDelete(i : number){
      this.userArray.splice(i,1)
    }

    onEdit(i : number){
        let user = this.userArray[i]
        console.log(user)

        this.name = user.name
        this.email = user.email
        this.address = user.address
    }
}
