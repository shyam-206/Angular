import { Component } from '@angular/core';

@Component({
  selector: 'app-color-component',
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.css']
})
export class ColorComponentComponent {

  arrayOfColorPalette : Array<any>  = [
    {colorName : "Primary",colorCode : "#4e73df" },
    {colorName : "Success",colorCode : "#1cc88a" },
    {colorName : "Info",colorCode : "#36b9cc" },
    {colorName : "Warning",colorCode : "#f6c23e" },
    {colorName : "Danger",colorCode : "#e74a3b" },
    {colorName : "Secondary",colorCode : "#858796" },
    {colorName : "Light",colorCode : "#f8f9fc" },
    {colorName : "Dark",colorCode : "#5a5c69" },
  ]


}
