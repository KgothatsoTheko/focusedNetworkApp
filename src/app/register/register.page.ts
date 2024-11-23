import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    fullName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    dateOfBirth: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('',[
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ])
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
    if (this.registerForm.invalid) {
      this.presentToast('Please fill in all fields correctly.', 'bottom');
      return;
    }
    console.log(this.registerForm.value);
    const registerForm = this.registerForm.value
    this.api.genericPost('register', registerForm).subscribe(
      (response:any)=> {
        console.log(`response: ${response}`);
        
       // Call the toast function with the response message and position
       this.presentToast('Registration successful!', 'bottom');
        
       // Navigate to confirmation page
       this.router.navigate(['/register-confirmation']);
     },
     (error:any) => {
      console.log(`Error: ${error.error}`);
       // Show an error toast if registration fails
       this.presentToast(`Registration failed: ${error.error}.`, 'bottom');
     }
    )
  }

}
