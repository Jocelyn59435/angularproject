export class CartItem {
  id: number;
  product_name: string;
  single_price: number;
  current_price: number;
  quantity: number;
  src: string;

  constructor() {
    this.id = 1;
    this.product_name = '';
    this.single_price = 1;
    this.current_price = 1;
    this.quantity = 1;
    this.src = '';
  }
}
