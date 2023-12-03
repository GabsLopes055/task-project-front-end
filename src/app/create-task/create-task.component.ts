import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login/login-service.service';
import { TaskService } from './task.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LayoutComponent } from '../layout/page/layout.component';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  formTask!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: TaskService,
    private message: MatSnackBar,
    private sidenav: LayoutComponent
  ) {
    this.formTask = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'priority': ['', Validators.required]
    })
  }

  openSidenav() {
    this.sidenav.openSidenav()
  }

  saveTask(): void {
    if (this.formTask.valid) {
      this.service.saveTask(this.formTask.value)
        .subscribe(() => {
          this.message.open("Tarefa Criada", "X", {
            horizontalPosition: "end",
            verticalPosition: "top",
            duration: 7000
          })

          
          this.formTask = this.createForm();
          this.formTask.clearValidators;
        }, error => {
          this.message.open(error.message, "X", {
            horizontalPosition: "end",
            verticalPosition: "top",
            duration: 7000
          })
        })
      
    } else {
      this.message.open("Preencha o formulário corretamente", "X", {
        horizontalPosition: "end",
        verticalPosition: "top"
      })
    }
  }

}
