import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  quantity: number = 0;
  product: Product = {
    id: 1,
    product_name: '',
    product_price: 1,
    product_category: '',
    src: '',
    description: '',
  };
  constructor(private route: ActivatedRoute, private service: DataService) {}

  ngOnInit(): void {
    let index = this.route.snapshot.params.id - 1;
    this.service.getProducts().subscribe((data) => {
      this.product = data[index];
    });
  }

  onAddToCart(product: Product, quantity: number): void {
    if (quantity < 1) {
      alert('Please choose a valid amount.');
      return;
    }
    this.service.addToCart(product, quantity);
  }
}
