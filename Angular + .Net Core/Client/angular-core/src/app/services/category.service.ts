import { Injectable } from '@angular/core';
import { AddCategory } from '../models/add-category.models';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http : HttpClient) { }

  addCategory(model : AddCategory) : Observable<void> {
    return  this.http.post<void>('http://localhost:5295/api/Category/CreateCategory',model);

  }
}
