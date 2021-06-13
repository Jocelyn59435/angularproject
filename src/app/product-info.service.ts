import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  private product = new Product();
  product$ = new BehaviorSubject<Product>(this.product);
  setProduct(product: Product) {
    this.product$.next(product);
  }
  constructor() {}
}
