import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor() { }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  register(){
    console.log(this.registerForm.value);
    
  }

}
