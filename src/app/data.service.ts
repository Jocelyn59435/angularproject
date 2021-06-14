import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Product } from './models/Product';
import { CartItem } from './models/CartItem';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  cartList: CartItem[] = [];
  constructor(private http: HttpClient) {}

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }
  addToCart(product: Product, quantity: number) {
    let checkProduct: unknown = this.cartList.find((p) => p.id === product.id);
    if (checkProduct === undefined) {
      this.cartList.push({
        id: product.id,
        product_name: product.product_name,
        price: product.product_price * quantity,
        quantity: quantity,
        src: product.src,
      });
    } else {
      let index: number = this.cartList.findIndex((c) => c.id === product.id);
      console.log(index);
      this.cartList[index].quantity += quantity;
    }
    console.log(this.cartList.map((c) => console.log(c)));
  }
}
