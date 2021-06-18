import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../models/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userInfo: UserInfo = { address: '', first_name: '', total_cost: 0 };
  constructor(private http: HttpClient) {}

  getProducts(): Observable<[]> {
    return this.http.get<[]>('assets/data.json');
  }

  updateUserInfo(currentUserInfo: UserInfo) {
    this.userInfo = currentUserInfo;
  }

  getUserInfo() {
    return this.userInfo;
  }
}
