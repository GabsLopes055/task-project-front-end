import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/create-task/task.service';
import { TasksInProgressService } from '../tasks-in-progress.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-task-delete',
  templateUrl: './task-delete.component.html',
  styleUrls: ['./task-delete.component.css']
})
export class TaskDeleteComponent {

  showMessage(msg: string, error: boolean) {
    this.message.open(msg, "X", {
      duration: 8000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: error ? "error" : "success"
    })
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) private cdId: { cdTask: number },
    private service: TasksInProgressService,
    private message: MatSnackBar,
    private dialog: MatDialog
  ) { }

  deleteTask() {
    this.service.deleteTask(this.cdId.cdTask).subscribe(() => { });
    this.dialog.closeAll()
    this.showMessage("Tarefa Excluida", true)
  }



}
