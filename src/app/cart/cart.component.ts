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
  userInfo: UserInfo = {
    address: ' ',
    first_name: ' ',
    total_cost: 0,
  };
  constructor(private service: DataService, private router: Router) {}

  ngOnInit(): void {
    this.cartList = this.service.getCartList();
  }
  getTotalCost(): number {
    return this.service.getTotalPrice();
  }

  isEmptyCart(): boolean {
    console.log(this.service.getCartList().length);
    console.log(this.cartList.length);
    return this.service.cartList.length === 0;
  }

  removeItem(cartItem: CartItem): void {
    let index: number = this.cartList.findIndex(
      (c) => c.product_name === cartItem.product_name
    );
    this.service.cartList.splice(index, 1);
  }

  checkOut() {
    this.router.navigateByUrl('/confirmation');
    this.userInfo.address = this.address;
    this.userInfo.first_name = this.fname;
    console.log(this.fname);
    this.userInfo.total_cost = this.getTotalCost();
  }
}
