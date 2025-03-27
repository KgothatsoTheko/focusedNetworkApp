import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { Platform } from '@ionic/angular';
import { FcmService } from './services/fcm.service';
import { WebRTCService } from './services/web-rtc.service';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  
  constructor(
    private platform: Platform,
    private fcmService: FcmService,
    private webrtcService: WebRTCService
  ) {
    this.initializeApp();
  }

  async initializeApp() {
     await this.platform.ready()
      // Trigger the push setup
      this.fcmService.initPush();

      // Request microphone permission and initialize local stream
    try {
      await this.webrtcService.initializeLocalStream();
      console.log('Microphone initialized successfully.');
    } catch (error) {
      console.error('Error initializing microphone:', error);
    }
    
  }

 
}
