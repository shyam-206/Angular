import { Component } from '@angular/core';
import { User } from '../../../models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],

  //providers : [UserService] 
  //if you providers component of user service here then parent and child instance user the two diff instance and they will not depend on the both but for the their are depend on each other that's why we always providers use the parent components

  //By this we are if changes in the user service variable or anything they will reflect on that and bind directly

  //here if we write the providers : [UserService] then by the time new create user list not updated
})
export class UserListComponent {

  constructor(private userService : UserService){

  }

   userList = this.userService.GetAllUser()

   showUseDetails(user : User){
      this.userService.OnShowUserDetails(user)
   }  
}
