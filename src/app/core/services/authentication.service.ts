import { Injectable } from '@angular/core';
import { User, UserManager, UserManagerSettings } from 'oidc-client';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _userManager: UserManager;
  private _user: User | undefined | null;
  private _loginChangedSubject = new Subject<boolean>();

  loginChanged = this._loginChangedSubject.asObservable();

  constructor() { 
    const stsSettings: UserManagerSettings = {
      client_id: 'public-client',
      authority: 'https://localhost:5443',
      redirect_uri: 'http://localhost:4200/signin-callback',
      post_logout_redirect_uri: 'http://localhost:4200/signout-callback',
      scope: 'openid profile',
      response_type: 'code'
    };

    this._userManager = new UserManager(stsSettings);
  }

  login(){
    return this._userManager.signinRedirect();
  }

  completeLogin() {
    return this._userManager.signinRedirectCallback().then(user => {
      this._user = user;
      this._loginChangedSubject.next(!!user && !user.expired);
      return user;
    })
  }

  logout(){
    this._userManager.signoutRedirect();
  }

  completeLogout() {
    this._user = null;
    return this._userManager.signoutRedirectCallback();
  }

  isLoggedIn(): Promise<boolean> {
    return this._userManager.getUser().then(user => {
      if(!user) return false;

      const userCurrent = user && user.expired;
      
      if(this._user !== user) {
        this._loginChangedSubject.next(userCurrent);
      }

      this._user = user;
      
      return userCurrent;
    })
  }
}
