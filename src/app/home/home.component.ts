import { Component, ViewChild } from '@angular/core';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { LayoutComponent } from '../layout/page/layout.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HomeService } from './home.service';
import { taskResponse } from 'src/interfaces/task.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  panelOpenState: boolean = false
  listTasks!: taskResponse[]

  constructor(
    private sidenav: LayoutComponent,
    private service: HomeService,
    private message: MatSnackBar
  ) { }

  ngOnInit(){
    this.listAllTasks();
  }

  showMessage(msg: string, error: boolean) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: error ? "error" : "success"
    })
  }

  openSidenav() {
    this.sidenav.openSidenav()
  }

  private listAllTasks() {
    this.service.listAllTasks().subscribe((response) => {
      this.listTasks = response;
    }, (error) => {
      this.showMessage(error.message, true)
    })
  }



}
