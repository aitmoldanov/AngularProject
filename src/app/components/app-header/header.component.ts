import { Component, OnInit } from '@angular/core';
import {User} from '@app/models/user';
import {AccountService} from '@app/services/account.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class HeaderComponent implements OnInit {
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  logout() {
    this.accountService.logout();
  }
  ngOnInit(): void {
  }

}
