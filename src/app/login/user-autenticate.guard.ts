import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from './login-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserAutenticateGuard implements CanActivate {

  constructor(private router: Router, private service: LoginServiceService) { }

  canActivate(): boolean {

    if(this.service.isAuthenticated() === false){
      this.router.navigate([""])
      this.service.showMessage("Por favor, refaça o login", true)
      return false
    }

    return true;
   
  }

}
