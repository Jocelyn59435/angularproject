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
    let quantityNumber: number = Number(quantity);
    if (checkProduct === undefined) {
      this.cartList.push({
        id: product.id,
        product_name: product.product_name,
        price: product.product_price * quantityNumber,
        quantity: quantityNumber,
        src: product.src,
      });
    } else {
      let index: number = this.cartList.findIndex((c) => c.id === product.id);
      this.cartList[index].quantity += quantityNumber;
      this.cartList[index].price += quantityNumber * product.product_price;
    }

    this.cartList.map((c) => {
      console.log(c);
    });

    console.log(this.cartList.length);
  }

  getCartList(): CartItem[] {
    return this.cartList;
  }

  updateCartList(currentQuantity: number, product_name: string) {
    let index: number = this.cartList.findIndex(
      (c) => (c.product_name = product_name)
    );
    debugger;
    let singleCost: number =
      this.cartList[index].price / Number(this.cartList[index].quantity);
    console.log(typeof this.cartList[index].price);
    console.log(typeof this.cartList[index].quantity);
    console.log(typeof singleCost);
    console.log(singleCost);
    console.log(Number(this.cartList[index].price));
    console.log(Number(this.cartList[index].quantity));
    this.cartList[index].quantity = currentQuantity;
    this.cartList[index].price = singleCost * Number(currentQuantity);
  }
}
