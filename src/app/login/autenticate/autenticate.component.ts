import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.component.html',
  styleUrls: ['./autenticate.component.css']
})
export class AutenticateComponent {

  formLogin!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: LoginServiceService,
    private router: Router
  ) {
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
      this.router.navigate(['dashboard']);
      this.service.loggged();
    })
  }
}
