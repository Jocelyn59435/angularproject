import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: CartItem[] = [];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.cartList = this.service.getCartList();
  }
}
