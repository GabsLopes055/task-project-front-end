import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login/login-service.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent {

  formTask!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginServiceService
  ){
    this.formTask = this.createForm()
  }

  createForm() {
    return this.formBuilder.group({
      'name': ['', Validators.required],
      'description': ['', Validators.required],
      'priority': ['', Validators.required]
    })
  }

  onSubmit(){
    if(this.formTask.valid) {
      this.service.showMessage("Valido", false)
    } else {
      this.service.showMessage("Preencha o formulário corretamente", true)
    }

    this.formTask.reset()
  }

}
