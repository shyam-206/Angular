import { EventEmitter, Injectable } from '@angular/core';
import { LoggerService } from './logger.service';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private logger : LoggerService) { }

  users : User[] = [
    { name: 'Steve Smith', gender: 'Male', subType: 'Monthly',status: 'Active'},
    { name: 'Mery Jane', gender: 'Female', subType: 'Yearly',status: 'Inactive'},
    { name: 'Mark Tyler', gender: 'Male', subType: 'Quaterly',status: 'Active'}
  ]

  GetAllUser(){
    // console.log(this.users)
    return this.users
  }

  CreateUser(name : string,gender : string,subType : string,status : string){
    let object : User = ({name,gender,subType,status})
    this.users.push(object)

    //here we are again they explicity create the service object of instance so its not better way
    // let logger = new LoggerService()    
    this.logger.LogMessage(name,status)
  }

  //Get User Details Methods
  OnUserDetailsClicked : EventEmitter<User> = new EventEmitter<User>

  OnShowUserDetails(user : User){
    this.OnUserDetailsClicked.emit(user)
  }
}
