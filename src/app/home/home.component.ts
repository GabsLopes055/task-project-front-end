import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from '../layout/page/layout.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  panelOpenState: boolean = false

  constructor(
    private sidenav: LayoutComponent
  ) { }

  openSidenav() {
    this.sidenav.openSidenav()
  }


}
