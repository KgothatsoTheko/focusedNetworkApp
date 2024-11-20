import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-nuggets',
  templateUrl: './nuggets.page.html',
  styleUrls: ['./nuggets.page.scss'],
})
export class NuggetsPage implements OnInit {

  gallery:any

  selectedSegment: string = 'first'; // Default segment

  information!:any

  constructor(private toastController: ToastController, private api: ApiService) { }

  async ngOnInit() {
    this.api.genericGet('information').subscribe(
      (res)=> {
        this.information = res
      },
      (error) => {
        this.presentToast(`Someting went wrong: ${error}`, 'bottom')
      }
    )
    this.api.genericGet('gallery').subscribe(
      (res)=> {
        this.gallery = res
      },
      (error) => {
        this.presentToast(`Someting went wrong: ${error}`, 'bottom')
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

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('information').subscribe(
        (res)=> {
          this.information = res
        },
        (error) => {
          this.presentToast(`Someting went wrong: ${error}`, 'bottom')
        }
      )
      this.api.genericGet('gallery').subscribe(
        (res)=> {
          this.gallery = res
        },
        (error) => {
          this.presentToast(`Someting went wrong: ${error}`, 'bottom')
        }
      )
      event.target.complete();
    }, 2000);
  }


  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value; // Update selected segment
  }

}
