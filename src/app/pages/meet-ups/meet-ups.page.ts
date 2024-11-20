import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-meet-ups',
  templateUrl: './meet-ups.page.html',
  styleUrls: ['./meet-ups.page.scss'],
})
export class MeetUpsPage implements OnInit {

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('events').subscribe(
        (res)=> {
          this.events = res
        },
        (error) => {
          this.presentToast(`Someting went wrong: ${error}`, 'bottom')
        }
      )
      event.target.complete();
    }, 2000);
  }

  events!:any

  constructor(private api: ApiService, private toastController: ToastController) { }

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  async ngOnInit() {
    this.api.genericGet('events').subscribe(
      (res)=> {
        this.events = res
      },
      (error) => {
        this.presentToast(`Someting went wrong: ${error}`, 'bottom')
      }
    )
}
}
