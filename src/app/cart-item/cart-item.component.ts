import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  currentAmount: number = 0;

  @Input() cartItem: CartItem = {
    id: 1,
    product_name: '',
    single_price: 1,
    current_price: 1,
    quantity: 1,
    src: '',
  };
  @Output() itemToRemove: EventEmitter<CartItem> = new EventEmitter();
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.currentAmount = this.cartItem.quantity;
  }

  changeQuantity(currentAmount: number) {
    this.service.updateCartList(currentAmount, this.cartItem.product_name);
  }

  removeItem(cartItem: CartItem): void {
    this.itemToRemove.emit(cartItem);
  }
}
