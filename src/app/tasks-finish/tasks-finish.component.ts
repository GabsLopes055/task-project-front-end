import { Component } from '@angular/core';
import { LayoutComponent } from '../layout/page/layout.component';
import { taskResponse } from 'src/interfaces/task.model';
import { TaskFinishService } from './task-finish.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-tasks-finish',
  templateUrl: './tasks-finish.component.html',
  styleUrls: ['./tasks-finish.component.css']
})
export class TasksFinishComponent {

  panelOpenState: boolean = false
  listTasks!: taskResponse[]

  constructor(
    private sidenav: LayoutComponent,
    private service: TaskFinishService,
    private message: MatSnackBar) { 
      this.listTasksFinish()
    }

  openSidenav() {
    this.sidenav.openSidenav()
  }

  showMessage(msg: string, error: boolean) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: error ? "error" : "success"
    })
  }


  listTasksFinish(): any {
    this.service.listTaskFinish().subscribe((response) => {
      this.listTasks = response
    }, (error) => {
      this.showMessage(error.message, true)
    })
  }

}
