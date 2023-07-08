import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-signin-callback',
  template: `<div></div>`,
  styles: [
  ]
})
export class SigninCallbackComponent implements OnInit {
  constructor(private _authenticationService: AuthenticationService,
            private _router: Router) {

  }

  ngOnInit(): void {
      this._authenticationService.completeLogin().then(user => {
        this._router.navigate(['/'], {replaceUrl: true});
      });
  }
}
