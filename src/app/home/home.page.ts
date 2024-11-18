import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private storage: Storage, private router: Router, private toastController: ToastController) {}

  async signOut() {
    // Clear storage
    await this.storage.clear();
  
    // Show a toast
    const toast = await this.toastController.create({
      message: 'See you Later sister',
      duration: 1500,
      position: 'bottom',
    });
    toast.present();
  
    // Navigate to the login page
    this.router.navigate(['/login']);
  }

  goToBookings(){
    this.router.navigate(['/home/bookings']);
  }

}
