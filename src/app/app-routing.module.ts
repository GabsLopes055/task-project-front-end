import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AutenticateComponent } from './login/autenticate/autenticate.component';
import { LayoutComponent } from './layout/page/layout.component';

const routes: Routes = [
  { path: '', component: AutenticateComponent },
  {
    path: 'dashboard', component: LayoutComponent,
    children: [
      
    ]
  },
  {path: "logout", redirectTo: ''},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
