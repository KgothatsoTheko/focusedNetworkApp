import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuggetsPageRoutingModule } from './nuggets-routing.module';

import { NuggetsPage } from './nuggets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuggetsPageRoutingModule
  ],
  declarations: [NuggetsPage]
})
export class NuggetsPageModule {}
