import { Component } from '@angular/core';
import { AddCategory } from 'src/app/models/add-category.models';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  model : AddCategory;
  
  constructor(private categoryService : CategoryService){
    this.model = {
      Name : ''
    }
  }

  onFormSubmit(){
    console.log(this.model)
    this.categoryService.addCategory(this.model)
    .subscribe({
      next : (res) => {
       console.log(res) 
      }
    })
  }
}
