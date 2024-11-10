import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage  {

  constructor(private router: Router, private api: ApiService, private toastController: ToastController) { }

  registerForm = new FormGroup({
    fullName: new FormControl(''),
    dateOfBirth: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  })

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  register(){
    console.log(this.registerForm.value);
    const registerForm = this.registerForm.value
    this.api.genericPost('register', registerForm).subscribe(
      (response)=> {
        console.log(`response: ${response}`);
        
       // Call the toast function with the response message and position
       this.presentToast('Registration successful!', 'bottom');
        
       // Navigate to confirmation page
       this.router.navigate(['/register-confirmation']);
     },
     (error) => {
      console.log(`Error: ${error}`);
       // Show an error toast if registration fails
       this.presentToast('Registration failed. Please try again.', 'bottom');
     }
    )
  }

}
