import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './Feature/Category/category-list/category-list.component';
import { AddCategoryComponent } from './Feature/Category/add-category/add-category.component';

const routes: Routes = [
  {
    path : "admin/categories",
    component : CategoryListComponent
  },
  {
    path : 'admin/categories/add',
    component : AddCategoryComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
