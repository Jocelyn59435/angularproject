import { Component, OnInit, Input } from '@angular/core';
import { UserInfo } from '../models/UserInfo';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  @Input() userInfo: UserInfo = {
    address: '',
    first_name: '',
    total_cost: 0,
  };
  constructor() {
    console.log(this.userInfo.first_name);
  }
  ngOnInit(): void {}
}
