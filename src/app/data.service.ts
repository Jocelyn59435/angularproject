import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/Product';
import { CartItem } from './models/CartItem';
import { UserInfo } from './models/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cartList: CartItem[] = [];
  totalPrice: number = 0;
  userInfo: UserInfo = { address: '', first_name: '', total_cost: 0 };
  constructor(private http: HttpClient) {}

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }

  addToCart(product: Product, quantity: number) {
    let checkProduct: unknown = this.cartList.find((p) => p.id === product.id);
    let quantityNumber: number = Number(quantity);
    if (checkProduct === undefined) {
      this.cartList.push({
        id: product.id,
        product_name: product.product_name,
        single_price: product.product_price,
        current_price: Number(product.product_price) * quantityNumber,
        quantity: quantityNumber,
        src: product.src,
      });
      alert(`${product.product_name} is added with ${quantity}.`);
    } else {
      let index: number = this.cartList.findIndex((c) => c.id === product.id);
      if (this.cartList[index].quantity + quantityNumber > 10) {
        alert('Sorry, maximum amount is 10, please choose a valid amount.');
        return;
      }
      this.cartList[index].quantity += quantityNumber;
      this.cartList[index].current_price +=
        Number(this.cartList[index].quantity) * product.product_price;
      alert(`${product.product_name} is added with ${quantity}.`);
    }
  }

  getCartList(): CartItem[] {
    return this.cartList;
  }

  updateCartList(currentQuantity: number, product_name: string): void {
    if (currentQuantity > 10) {
      alert('Sorry, maximum amount is 10, please choose a valid amount.');
      return;
    }
    let index: number = this.cartList.findIndex(
      (c) => c.product_name === product_name
    );
    this.cartList[index].quantity = Number(currentQuantity);
    this.cartList[index].current_price =
      Number(this.cartList[index].quantity) *
      Number(this.cartList[index].single_price);
  }

  getTotalPrice(): number {
    this.totalPrice = this.cartList.reduce((acc, cartItem) => {
      return acc + cartItem.current_price;
    }, 0);
    return this.totalPrice;
  }

  updateUserInfo(currentUserInfo: UserInfo) {
    this.userInfo = currentUserInfo;
  }

  getUserInfo() {
    return this.userInfo;
  }
}
