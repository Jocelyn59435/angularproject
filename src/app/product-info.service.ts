import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  private productInfo = new BehaviorSubject<Product>({
    id: 1,
    product_name: 'Lindt Les Grandes Dark Choc & Hazelnut',
    product_price: 5.4,
    product_category: 'Snack',
    src: 'https://shop.coles.com.au/wcsstore/Coles-CAS/images/3/7/5/3759260.jpg',
    description:
      'The Lindt Master Chocolatiers have created this masterpiece using whole hazelnuts, roasted to perfection, mixed with crunchy caramelised hazelnut pieces surrounded by smooth dark chocolate.',
  });

  currentProductInfo = this.productInfo.asObservable();
  constructor() {}
  changeProductInfo(product: Product) {
    this.productInfo.next(product);
  }
}
