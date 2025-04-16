import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { input } from '@angular/core';
import { ProductService } from '../../services/product.service';


export interface Product {
  image: string;
  productName: string;
  productPrice: number;
  onSale: boolean;
} 


@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  // @Input() products!: Product[];  // Use the non-null assertion operator to indicate that this will be provided by the parent component
  @Input() products: Product[] = [];  // Initialize with an empty array

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();    // get data from the service
  }
}


