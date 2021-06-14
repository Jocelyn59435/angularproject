import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  product: Product = {
    id: 1,
    product_name: '',
    product_price: 1,
    product_category: '',
    src: '',
    description: '',
  };
  constructor(private service: ProductInfoService) {}

  ngOnInit(): void {
    this.service.currentProductInfo.subscribe((data) => (this.product = data));
  }
}
