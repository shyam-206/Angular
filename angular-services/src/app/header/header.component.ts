import { Component } from '@angular/core';
import { SubscribeService } from '../services/subscribe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers : [SubscribeService] //2. what is provide
})
export class HeaderComponent {
  // subService !: SubscribeService
  selectedTab: string = 'home';

  //1. How to provide a dependency
  constructor(private subService : SubscribeService){

  }


  //When HOME Link is clicked
  HomeClicked(){
    this.selectedTab = 'home';
  }

  //When Admin Link is clicked
  AdminClicked(){
    this.selectedTab = 'admin';
  }

  OnSubscribe(){
    //this is dependency injection and tightly coupled 
    //create object for them all every time
    //let subService = new SubscribeService()

    //3. use the services
    this.subService.OnSubscribeClicked("monthly")
  }
}
