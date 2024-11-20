import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.page.html',
  styleUrls: ['./mentors.page.scss'],
})
export class MentorsPage implements OnInit {

  mentors!:any
  currentUser:any

  constructor(private storage: Storage, private api: ApiService, private toastController: ToastController) { }

  async ngOnInit() {
    this.api.genericGet('mentors').subscribe(
      (res)=> {
        this.mentors = res
      },
      (error) => {
        this.presentToast(`Something went wrong: ${error.error}`, 'bottom');
      }
    )
    // Initialize Ionic Storage
    await this.storage.create();
    // Retrieve user data from Ionic Storage
    this.currentUser = await this.storage.get('currentUser');
  }

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('mentors').subscribe(
        (res)=> {
          this.mentors = res
        },
        (error) => {
          this.presentToast(`Something went wrong: ${error.error}`, 'bottom');
        }
      )
      event.target.complete();
    }, 2000);
  }

  // Alert buttons with dynamic behavior
  createAlertButtons(item: any) {
    return [
      {
        text: 'Cancel',
        role: 'cancel',
      },
      {
        text: 'Confirm Booking',
        role: 'confirm',
        handler: () => {
          this.bookMentor(item);
        },
      },
    ];
  }

  // book a mentor
  bookMentor(item: any) {
    const bookingData = {
      userId: this.currentUser.data._id, 
      mentorId: item._id,
      date: item.availability[0]?.date,
      time: item.availability[0]?.time,
    };

    this.api.genericPost('add-bookings', bookingData).subscribe(
      (response) => {
        this.presentToast('Booking successful!', 'bottom');
      },
      (error) => {
        this.presentToast(`Booking failed: ${error.error}`, 'bottom');
      }
    );
  }


}
