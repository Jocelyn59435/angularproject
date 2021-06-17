import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { CartItem } from '../models/CartItem';
import { Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartList: CartItem[] = [];
  fname: string = '';
  lname: string = '';
  address: string = '';
  cardnumber: string = '';

  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.service.getCartList();
  }
  getTotalCost(): number {
    return this.service.getTotalPrice();
  }

  isEmptyCart(): boolean {
    return this.service.cartList.length === 0;
  }

  removeItem(cartItem: CartItem): void {
    let index: number = this.cartList.findIndex(
      (c) => c.product_name === cartItem.product_name
    );
    this.service.cartList.splice(index, 1);
  }

  checkOut() {
    let userInfo: UserInfo = {
      address: this.address,
      first_name: this.fname,
      total_cost: this.getTotalCost(),
    };
    this.service.updateUserInfo(userInfo);
    this.router.navigateByUrl('/confirmation');
  }
}
