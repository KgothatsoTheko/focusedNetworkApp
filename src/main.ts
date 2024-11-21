import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';

import { Capacitor } from '@capacitor/core';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
