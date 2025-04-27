import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { ApiService } from 'src/app/services/api.service';
import { WebRTCService } from 'src/app/services/web-rtc.service';

@Component({
  selector: 'app-sisterhood-garden',
  templateUrl: './sisterhood-garden.page.html',
  styleUrls: ['./sisterhood-garden.page.scss'],
})
export class SisterhoodGardenPage implements OnInit {
  roomId = 'sisterhood-room';
  isInRoom = false;
  meetUps!:any
  isMuted = true;
  attendeesCount:number = 0;

  constructor(private webrtcService: WebRTCService, private cdr: ChangeDetectorRef, private api: ApiService, private toastController: ToastController) {}

  ngOnInit() {
    // Listen for unmote response count 
    this.webrtcService.getResponse().subscribe((muted) => {
      this.isMuted = muted;
      console.log(this.isMuted);
      this.cdr.detectChanges()
    });
  }

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

  async joinRoom() {
    await this.webrtcService.joinRoom(this.roomId);
    this.isInRoom = true;
  }
  
  leaveRoom() {
    this.webrtcService.leaveRoom(this.roomId);
    this.isInRoom = false;
  }

  toggleMute() {
  if (this.isMuted) {
    this.webrtcService.requestUnmute(this.roomId);
    this.cdr.detectChanges()
  } else {
    this.webrtcService.muteAudio(true); // Actually mute the audio
    this.isMuted = true;
    this.cdr.detectChanges(); // Ensure UI updates
  }
}
  
  // toggleMute() {
  //   this.isMuted = !this.isMuted;
  // this.webrtcService.muteAudio(this.isMuted);
  // console.log(`Microphone is now ${this.isMuted ? 'Muted' : 'Unmuted'}`);
  // }

  handleRefresh(event: any) {
    setTimeout(() => {
      location.reload(); // This reloads the entire page
    }, 2000); // You can skip the timeout if you want it instantly
  }
}
