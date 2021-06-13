import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';
import { ProductInfoServiceService } from '../product-info-service.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private service: ProductInfoServiceService,
    public product: Product
  ) {}

  ngOnInit(): void {
    this.service.product$.subscribe((data) => (this.product = data));
  }
}
