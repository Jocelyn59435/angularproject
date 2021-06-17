import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../models/UserInfo';
import { DataService } from '../data.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  userInfo: UserInfo = {
    address: '',
    first_name: '',
    total_cost: 0,
  };
  constructor(private service: DataService) {}
  ngOnInit(): void {
    this.userInfo = this.service.getUserInfo();
  }

  isEmptyCart(): boolean {
    return this.service.cartList.length === 0;
  }
}
