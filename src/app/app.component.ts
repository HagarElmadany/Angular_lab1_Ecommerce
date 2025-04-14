import { Category } from './components/category/category.component';
import { Product } from './components/product/product.component';
import { Component } from '@angular/core';
import { CategoryComponent } from './components/category/category.component';
import { ProductComponent } from './components/product/product.component';  
import { NavbarComponent } from './components/navbar/navbar.component'; 
import { FooterComponent } from './components/footer/footer.component'; 

@Component({
  selector: 'app-root',
  imports: [NavbarComponent,ProductComponent,CategoryComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products:Product[] = [
    {
      image: 'assets/images/1.jpg',
      productName: 'Product 1',
      productPrice: 100,
      onSale: true
    },
    {
      image: 'assets/images/2.jpg',
      productName: 'Product 2',
      productPrice: 200,
      onSale: false
    },
    {
      image: 'assets/images/3.jpg',
      productName: 'Product 3',
      productPrice: 300,
      onSale: true
    },
    ];

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
