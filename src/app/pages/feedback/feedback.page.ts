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
    helpful: new FormControl('', Validators.required),
    easyToUse: new FormControl('', Validators.required),
    recommend: new FormControl('', Validators.required),
    comments: new FormControl('')
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

    if (!form.helpful || !form.easyToUse || !form.recommend) {
      this.presentToast('Please answer all required questions', 'bottom');
    } else {
      this.api.genericPost('add-feedback', form).subscribe(
        (response:any) => {
          this.presentToast('Feedback submitted successfully, Thank You', 'bottom');
          this.router.navigate(['/home/dashboard']);
        },
        (error:any) => {
          this.presentToast(`Something went wrong: ${error}`, 'bottom');
        }
      );
    }
  }

}
