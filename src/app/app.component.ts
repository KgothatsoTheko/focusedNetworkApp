import { Component, OnInit } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { FirebaseMessaging } from '@capacitor-firebase/messaging';
import { PushNotifications, Token } from '@capacitor/push-notifications';
import { Platform } from '@ionic/angular';
import { Capacitor } from '@capacitor/core';

register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {}

  // ngOnInit() {
  //   this.platform.ready().then(() => {
  //     this.initializePushNotifications().then(() => {
  //       this.subscribeToMentorNotifications();
  //     });
  //   });
  // }

  // async initializePushNotifications() {
  //   try {
  //      // Request notification permissions (only for iOS or Android 12 and below)
  //      const permission = await PushNotifications.requestPermissions();

  //     if (permission.receive === 'granted') {
  //       // Register for push notifications
  //       await PushNotifications.register();

  //       // Handle token updates
  //       PushNotifications.addListener('registration', (token: Token) => {
  //         console.log('Push notification token:', token.value);
  //       });

  //       PushNotifications.addListener('registrationError', (error) => {
  //         console.error('Push notification registration error:', error);
  //       });

  //       PushNotifications.addListener('pushNotificationReceived', (notification) => {
  //         console.log('Push notification received:', notification);
  //       });

  //       PushNotifications.addListener('pushNotificationActionPerformed', (notification) => {
  //         console.log('Push notification action performed:', notification);
  //       });

  //       console.log('Push notifications initialized');
  //     } else {
  //       console.warn('Push notification permission denied');
  //     }
  //   } catch (error) {
  //     console.error('Error initializing push notifications:', error);
  //   }
  // }

  // async subscribeToMentorNotifications() {
  //   if (Capacitor.isNativePlatform()) {
  //     try {
  //       await FirebaseMessaging.subscribeToTopic({ topic: 'mentor' });
  //       console.log('Subscribed to mentor topic');
  //     } catch (error) {
  //       console.error('Error subscribing to topic:', error);
  //     }
  //   } else {
  //     console.warn('Push notifications are not available on this platform');
  //   }
  // }

 
}
