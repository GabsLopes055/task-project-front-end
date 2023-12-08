import { Component } from '@angular/core';
import { taskResponse } from 'src/interfaces/task.model';
import { TasksInProgressService } from './tasks-in-progress.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LayoutComponent } from '../layout/page/layout.component';
import { MatDialog } from '@angular/material/dialog';
import { TaskDeleteComponent } from './task-delete/task-delete.component';
import { FinishTaskComponent } from './finish-task/finish-task.component';



@Component({
  selector: 'app-tasks-in-progress',
  templateUrl: './tasks-in-progress.component.html',
  styleUrls: ['./tasks-in-progress.component.css']
})
export class TasksInProgressComponent {

  panelOpenState: boolean = false
  tasksInProgress!: taskResponse[];

  ngOnInit() {
    this.listTasksInProgress();
  }

  constructor(private service: TasksInProgressService,
    private sidenav: LayoutComponent,
    private message: MatSnackBar,
    private dialog: MatDialog) { }

  listTasksInProgress() {
    this.service.listTasksPending().subscribe(response => {
      this.tasksInProgress = response;
    })
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

  deleteTask(cdId: number) {
    this.dialog.open(TaskDeleteComponent, {
      data: {
        cdTask: cdId
      },
      width: '80%',
      height: 'auto'
    });
  }

  finishTask(task: taskResponse) {
    this.dialog.open(FinishTaskComponent, {
      data: {
        task: task
      },
      width: '80%',
      height: 'auto'
    });
  }

  modal = this.dialog.afterAllClosed.subscribe(() => {
    this.listTasksInProgress()
  })

  

}
