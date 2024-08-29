import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private userService : UserService) { }

  isLogged : boolean = false


  login(username : string , password : string){
    let user = this.userService.users.find((u) => u.username === username && u.password === password)

    if(user === undefined || user === null){
      this.isLogged = false
    }
    else{
      this.isLogged = true
    }

    return user
  }

  logout(){
    this.isLogged = false
  }

  isAuthenticated(){
    return this.isLogged
  }
}
