export class Product {
  id: number;
  product_name: string;
  product_price: number;
  product_category: string;
  src: string;
  description: string;

  constructor() {
    this.id = 1;
    this.product_name = '';
    this.product_price = 1;
    this.product_category = '';
    (this.src = ''), (this.description = '');
  }
}
