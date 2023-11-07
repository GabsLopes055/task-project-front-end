import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login/login-service.service';
import { TaskService } from '../services/task.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private message: MatSnackBar
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

  onSubmit() {
    if (this.formTask.valid) {
      this.service.saveTask(this.formTask.value)
        .subscribe(() => {

          this.message.open("Tarefa Criada", "X", {
            horizontalPosition: "end",
            verticalPosition: "top",
            duration: 7000
          })

          this.formTask = this.createForm()
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

    // 
  }

}
