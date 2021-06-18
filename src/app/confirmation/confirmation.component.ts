import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../models/UserInfo';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  userInfo: UserInfo = {
    address: '',
    first_name: '',
    total_cost: 0,
  };
  constructor(
    private data_service: DataService,
    private cart_service: CartService
  ) {}
  ngOnInit(): void {
    this.userInfo = this.data_service.getUserInfo();
  }

  isEmptyCart(): boolean {
    return this.cart_service.cartList.length === 0;
  }
}
