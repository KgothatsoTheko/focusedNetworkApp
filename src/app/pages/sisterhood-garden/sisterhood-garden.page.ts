import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { WebRTCService } from 'src/app/services/web-rtc.service';

@Component({
  selector: 'app-sisterhood-garden',
  templateUrl: './sisterhood-garden.page.html',
  styleUrls: ['./sisterhood-garden.page.scss'],
})
export class SisterhoodGardenPage {
  roomId = 'sisterhood-room';
  isInRoom = false;
  meetUps!:any
  isMuted = false;
  attendeesCount:number = 0;

  constructor(private webrtcService: WebRTCService, private api: ApiService, private toastController: ToastController) {}

  // ngOnInit() {
  //   // Listen for attendee count updates
  //   this.webrtcService.getAttendeesCount().subscribe((count) => {
  //     this.attendeesCount = count;
  //     console.log(this.attendeesCount);
      
  //   });
  // }

  async presentToast(message: string, position: 'bottom') {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
    });
    toast.present();
  }

  // getChipText(): string {
  //   return this.attendeesCount === 0 ? 'Offline' : 'LIVE';
  // }
  
  // getChipColor(): string {
  //   return this.attendeesCount === 0 ? 'danger' : 'success';
  // }

  joinRoom() {
    this.webrtcService.joinRoom(this.roomId);
    this.isInRoom = true;
  }
  
  leaveRoom() {
    this.webrtcService.leaveRoom(this.roomId);
    this.isInRoom = false;
  }
  
  toggleMute() {
    this.isMuted = !this.isMuted;
  this.webrtcService.muteAudio(this.isMuted);
  console.log(`Microphone is now ${this.isMuted ? 'Muted' : 'Unmuted'}`);
  }

  handleRefresh(event:any) {
    setTimeout(() => {
      // Any calls to load data go here
      this.api.genericGet('events').subscribe(
        (res)=> {
          this.meetUps = res
          window.location.reload()
        },
        (error) => {
          this.presentToast(`Someting went wrong: ${error}`, 'bottom')
        }
      )
      event.target.complete();
    }, 2000);
  }
}
