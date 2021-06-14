import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  constructor(private service: DataService) {}

  ngOnInit(): void {
    this.service.getProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
