import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private _authenticationService: AuthenticationService) {
    this._authenticationService.loginChanged.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    });
  }

  ngOnInit(): void {
      this._authenticationService.isLoggedIn().then(loggedIn => {
        this.isLoggedIn = loggedIn;
      });
  }

  login(): void {
    this._authenticationService.login();
  }

  logout(): void {
    this._authenticationService.logout();
  }
}
