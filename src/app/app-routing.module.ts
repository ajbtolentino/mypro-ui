import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { SigninCallbackComponent } from './features/home/signin-callback.component';
import { SignoutCallbackComponent } from './features/home/signout-callback.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin-callback', component: SigninCallbackComponent},
  { path: 'signout-callback', component: SignoutCallbackComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
