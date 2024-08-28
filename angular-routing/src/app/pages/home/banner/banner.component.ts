import { query } from '@angular/animations';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent {

  router : Router = inject(Router)

  OnSearchClicked(searchVar : string){
    console.log(searchVar)

    this.router.navigate(['/courses'] ,{ queryParams : {search : searchVar}})
  }
}
