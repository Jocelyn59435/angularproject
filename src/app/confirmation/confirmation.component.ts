import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserInfo } from '../models/UserInfo';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  userInfo: UserInfo = { address: '', first_name: '', total_cost: 0 };
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state);
  }

  ngOnInit(): void {
    this.userInfo = this.router.getCurrentNavigation()?.extras
      .state as unknown as UserInfo;
  }
}
