import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

import { Capacitor } from '@capacitor/core';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: 'AIzaSyBk8rs0eMKpVRrWSyWhHekE_ZYt2-cDPiw',
//   authDomain: 'focus-network-eca6d.firebaseapp.com',
//   projectId: 'focus-network-eca6d',
//   storageBucket: 'focus-network-eca6d.appspot.com',
//   messagingSenderId: '525879076713',
//   appId: '1:525879076713:android:809b678fe47ad1ef643ff8',
// };


// // Ensure platform-specific logic
// if (Capacitor.getPlatform() === 'android' || Capacitor.getPlatform() === 'ios') {
//   const app = initializeApp(firebaseConfig);
//   const messaging = getMessaging(app);
// }


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
