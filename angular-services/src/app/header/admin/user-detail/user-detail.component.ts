import { Component } from '@angular/core';
import { User } from '../../../models/User.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {

  selectedUser !: User;
  // userService = inject(USER_TOKEN);
  constructor(private userService : UserService){

  }

  ngOnInit(){
    this.userService.OnUserDetailsClicked.subscribe((data: User) => {
      this.selectedUser = data;
      console.log(this.selectedUser)
    })
  }
}
