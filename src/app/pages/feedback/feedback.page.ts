import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.page.html',
  styleUrls: ['./feedback.page.scss'],
})
export class FeedbackPage {

  feedbackForm = new FormGroup({
    description: new FormControl('',Validators.required)
  })

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

  submit(){
    const form = this.feedbackForm.value
    console.log("form", form);

    if(form.description == '') {
      this.presentToast("Please fill in feedback", "bottom")
    } else {
      this.api.genericPost('add-feedback', form).subscribe(
        (response) => {
         // Call the toast function with the response message and position
         this.presentToast('Feedback given, Thank You', 'bottom');
          
         // Navigate to confirmation page
         this.router.navigate(['/home/dashboard']);
       },
       (error) => {
         this.presentToast(`Something went wrong: ${error}`, 'bottom');
       }
      )
    }
  }

}
