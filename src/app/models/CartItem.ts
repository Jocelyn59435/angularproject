export class CartItem {
  id: number;
  product_name: string;
  price: number;
  quantity: number;
  src: string;

  constructor() {
    this.id = 1;
    this.product_name = '';
    this.price = 1;
    this.quantity = 1;
    this.src = '';
  }
}
