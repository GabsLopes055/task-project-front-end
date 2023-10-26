import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/page/layout.component';
import { UserAutenticateGuard } from './login/user-autenticate.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard', component: LayoutComponent, canActivate: [UserAutenticateGuard],
    children: [
      {path: '', component: HomeComponent}
    ]
  },
  { path: '**', redirectTo: '', canActivate: [UserAutenticateGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
// 