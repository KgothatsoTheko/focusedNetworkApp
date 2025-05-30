import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { LoadingController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private api: ApiService, private loadingController: LoadingController, private toastController: ToastController, private storage: Storage) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/),
    ]),
  })

  async ngOnInit() {
    // Initialize Ionic Storage
    await this.storage.create();
  }

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  async presentLoading(message: string) {
    const loading = await this.loadingController.create({
      message: message,
      spinner: 'crescent',
      duration: 7000, // Optional: auto-dismiss after 5 seconds
    });
    await loading.present();
    return loading;
  }


  async login() {
    if (this.loginForm.invalid) {
      this.presentToast('Please fill in all fields correctly.', 'bottom');
      return;
    }
    const loginForm = this.loginForm.value
    const loading = await this.presentLoading('Logging in...');
    this.api.genericPost('login', loginForm).subscribe(
      async (response:any) => {
        await loading.dismiss();
        // Ensure storage is initialized before setting data
        // await this.storage.set('accessToken', response.token);
        await this.storage.set('currentUser', response);

       // Call the toast function with the response message and position
       this.presentToast('Login successful!', 'bottom');
        
       // Navigate to confirmation page
       this.router.navigate(['/home/dashboard']);
       this.loginForm.reset()
     },
     async (error:any) => {
      await loading.dismiss();
      console.log(`Error: ${error.error}`);
       // Show an error toast if registration fails
       this.presentToast(`Login failed. ${error.error}.`, 'bottom');
     }
    )
  }

}
