import { Component } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent {

  toggleBtn : boolean = false

  onToggle(){
    this.toggleBtn = ! this.toggleBtn
    
  }
}
