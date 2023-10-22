import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/login/login-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  constructor(private route: Router, private service: LoginServiceService){}

  logout() {
    this.route.navigate([""])
    this.service.logout()
  }

}
