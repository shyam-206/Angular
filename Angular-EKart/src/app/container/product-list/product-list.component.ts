import { Component, Input } from '@angular/core';
import {products} from './product-list'

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  name : string = "John"
  Qty : number = 0

  products = products
  totalProductCount = this.products.length;
  totalProductInStock = this.products.filter(p => p.is_in_inventory == true).length
  totalProductOutOfStock = this.products.filter(p => p.is_in_inventory === false).length
  selectedFilterBtn : string = "All"
  
  onFilterChange(value : string){
    console.log('parent filter called')
    this.selectedFilterBtn = value
  }

  @Input()
  searchTextProductChild : string = ""
  

  //for practice
  product = {
    name : "IPhone",
    price  : 999,
    color : "Rose Gold",
    discount : 9,
    inStock : 10
  }

  getDiscountPrice(){
    return (this.product.price - (this.product.price * this.product.discount/100))
  }

  onChange(e : any){
    this.name = e.target.value
  }
  
  decrease(){
    if(this.Qty > 0){
      this.Qty--
    }
  }

  increase(){
    if(this.Qty < this.product.inStock)
      this.Qty++
  }


}
