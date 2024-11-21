import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mental',
  templateUrl: './mental.page.html',
  styleUrls: ['./mental.page.scss'],
})
export class MentalPage {

  mentalHealthForm = new FormGroup({
    stressLevel: new FormControl('', Validators.required),
    sleepQuality: new FormControl('', Validators.required),
    supportSystem: new FormControl('', Validators.required),
    comments: new FormControl('')
  });

  constructor(private location: Location, private toastController: ToastController, private api: ApiService, private router: Router) { }

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  goBack() {
    this.location.back()
  }

  submit() {
    const form = this.mentalHealthForm.value;
    console.log('form', form);

    if (!form.stressLevel || !form.sleepQuality || !form.supportSystem) {
      this.presentToast('Please answer all required questions', 'bottom');
    } else {
      this.api.genericPost('mental-health-checkup', form).subscribe(
        (response) => {
          this.presentToast('Mental health check-up submitted successfully. Thank you!', 'bottom');
          this.router.navigate(['/home/dashboard']);
        },
        (error) => {
          this.presentToast(`Something went wrong: ${error}`, 'bottom');
        }
      );
    }
  }
 

}
