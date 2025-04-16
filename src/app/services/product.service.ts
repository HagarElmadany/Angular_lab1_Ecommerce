import { Injectable } from '@angular/core';
import { Product } from '../components/product/product.component';

@Injectable({
  providedIn: 'root'  // I can use this service in any component in my app
}) 

export class ProductService {

   private products:Product[] = [
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
  
    
  constructor() {} 

  getProducts(): Product[] {
    return this.products;
  }
}

