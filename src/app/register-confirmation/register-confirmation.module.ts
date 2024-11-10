import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterConfirmationPageRoutingModule } from './register-confirmation-routing.module';

import { RegisterConfirmationPage } from './register-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterConfirmationPageRoutingModule
  ],
  declarations: [RegisterConfirmationPage]
})
export class RegisterConfirmationPageModule {}
