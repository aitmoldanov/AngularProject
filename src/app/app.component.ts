
import { Component } from '@angular/core';
import {User} from './models/user';
import {AccountService} from './services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab2';
  user: User;

  constructor(private accountService: AccountService) {
    this.accountService.user.subscribe(x => this.user = x);
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.accountService.logout();
  }
}
