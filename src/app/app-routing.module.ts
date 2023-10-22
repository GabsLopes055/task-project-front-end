import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticateComponent } from './login/autenticate/autenticate.component';
import { LayoutComponent } from './layout/page/layout.component';
import { UserAutenticateGuard } from './login/user-autenticate.guard';

const routes: Routes = [
  { path: '', component: AutenticateComponent },
  {
    path: 'dashboard', component: LayoutComponent, canActivate: [UserAutenticateGuard]

  },
  { path: "logout", redirectTo: '', canActivate: [UserAutenticateGuard] },
  { path: '**', redirectTo: '', canActivate: [UserAutenticateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 