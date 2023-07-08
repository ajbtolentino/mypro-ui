import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-signout-callback',
  template: `<div></div>`,
  styles: [
  ]
})
export class SignoutCallbackComponent implements OnInit {
  constructor(private _authenticationService: AuthenticationService,
            private _router: Router) {

  }

  ngOnInit(): void {
      this._authenticationService.completeLogout().then(user => {
        console.log("Test");
        this._router.navigate(['/'], {replaceUrl: true});
      });
  }
}
