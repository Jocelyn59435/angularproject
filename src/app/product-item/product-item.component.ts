import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  quantity: number = 0;
  constructor(private service: CartService) {
    this.product = {
      id: 1,
      product_name: '',
      product_price: 1,
      product_category: '',
      src: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  onAddToCart(product: Product, quantity: number): void {
    if (quantity < 1) {
      alert('Please choose a valid amount.');
      return;
    }
    this.service.addToCart(product, quantity);
  }
}
