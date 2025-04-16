import { Component ,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Category {
  image: string;
  price: number;
}

@Component({
  selector: 'app-category',
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  // @Input() categories: Category[] = [];
  @Input() categories!: Category[];
}


