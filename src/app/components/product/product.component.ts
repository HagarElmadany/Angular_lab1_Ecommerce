import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';


// export interface Product {
//   image: string;
//   productName: string;
//   productPrice: number;
//   onSale: boolean;
// } 

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
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
  topCategory: string = 'jewelery'; // to store the top category name
  filteredProducts: Product[] = [];   // to store the filtered products

  constructor(private productService: ProductService ) {   
    this.products = this.productService.getAllProducts();    // get all products from the service
    this.filteredProducts = this.products.filter(product => product.category === this.topCategory);
  }

}
