import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TasksInProgressService } from '../tasks-in-progress.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { taskResponse } from 'src/interfaces/task.model';

@Component({
  selector: 'app-finish-task',
  templateUrl: './finish-task.component.html',
  styleUrls: ['./finish-task.component.css']
})
export class FinishTaskComponent {

  showMessage(msg: string, error: boolean) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: error ? "error" : "success"
    })
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private task: { task: taskResponse },
    private service: TasksInProgressService,
    private message: MatSnackBar,
    private dialog: MatDialog
  ) { }

  finishTask() {
    this.task.task.finish = true
    this.service.finishTask(this.task.task).subscribe(() => { });
    this.dialog.closeAll()
    this.showMessage("Tarefa Finalizada", false)
  }



}
