import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit{

  bookings: any[] = [];
  bookedMentors:any[] = []
  currentUser!:any

  constructor(private location: Location, private api: ApiService, private storage: Storage, private toastController: ToastController) { }

  async ngOnInit() {

     // Initialize Ionic Storage
     await this.storage.create();
     // Retrieve user data from Ionic Storage
     this.currentUser = await this.storage.get('currentUser');

    this.api.genericGet(`get-bookings/${this.currentUser.data._id}`).subscribe(
      (res:any)=> {
        this.bookings = res 
        this.bookings.forEach(booking => {
          this.api.genericGet(`mentors/${booking.mentorId}`).subscribe(
            (mentorRes) => {
              this.bookedMentors.push(mentorRes);
            },
            (error) => {
              this.presentToast(`someting went wrong: ${error}`, 'bottom')
            }
          );
        });
        
      },
      (error) => {
       this.presentToast(`someting went wrong: ${error}`, 'bottom')
      }
    )
    
  }

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

}
