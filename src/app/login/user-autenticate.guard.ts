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
      return false
      this.router.navigate([""])
    }

    return true;
   
  }

}
