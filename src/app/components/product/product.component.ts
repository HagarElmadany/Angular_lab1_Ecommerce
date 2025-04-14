import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';


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
  @Input() products: Product[] = [];
}


