import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { CategoryComponent } from '../category/category.component';
import { Product } from '../product/product.component';
import { Category } from '../category/category.component';
import { ProductService } from './../../services/product.service';

@Component({
  selector: 'app-home-component',
  imports: [ProductComponent,CategoryComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // to display the products in the home component
    products: Product[] = [];
  
    constructor(private productService: ProductService) {
      this.products = this.productService.getProducts();    // get data from the service
    }
  
// to display the categories in the home component
    Categories: Category[] = [
      {
        image: 'assets/images/1.jpg',
        price: 100
      },
      {
        image: 'assets/images/2.jpg',
        price: 200
      },
      {
        image: 'assets/images/3.jpg',
        price: 300
      }
    ];
  

}
