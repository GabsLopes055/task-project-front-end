import { Component, ViewChild } from '@angular/core';
import { MatDrawer, MatDrawerContainer, MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginServiceService } from 'src/app/login/login-service.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router,
    private service: LoginServiceService
  ) { }

  openSidenav() {
    this.sidenav.open()
  }


  logout() {
    this.service.logout()
    this.router.navigate([""])
  }

}
