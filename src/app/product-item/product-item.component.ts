import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';
import { ProductInfoService } from '../product-info.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  constructor(private service: ProductInfoService) {
    this.product = {
      id: 1,
      product_name: '',
      product_price: 1,
      product_category: '',
      src: '',
      description: '',
    };
  }
  setProduct(product: Product) {
    this.service.setProduct(product);
  }
  ngOnInit(): void {}
}
