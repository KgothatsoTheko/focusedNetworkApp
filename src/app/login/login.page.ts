import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) { }

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  })


  login() {
    console.log(this.loginForm.value);
  }

}
