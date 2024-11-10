import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MeetUpsPageRoutingModule } from './meet-ups-routing.module';

import { MeetUpsPage } from './meet-ups.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MeetUpsPageRoutingModule
  ],
  declarations: [MeetUpsPage]
})
export class MeetUpsPageModule {}
