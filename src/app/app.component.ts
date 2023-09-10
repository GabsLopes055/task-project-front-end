import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { LoginServiceService } from './login/login-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginServiceService
  ){
    this.formLogin = this.createForm();
  }

  createForm(): FormGroup {
    return this.formBuilder.group({
      email: ['gabriel.teixeira@sicoob.com.br', Validators.required],
      password: ['123', Validators.required]
    })
  }

  login() {
    this.service.login(this.formLogin.value).subscribe((response) => {
      this.service.showMessage("Achou", false)
    })
  }
}
