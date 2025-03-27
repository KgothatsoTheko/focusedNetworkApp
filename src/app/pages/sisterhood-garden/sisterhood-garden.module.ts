import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SisterhoodGardenPageRoutingModule } from './sisterhood-garden-routing.module';

import { SisterhoodGardenPage } from './sisterhood-garden.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SisterhoodGardenPageRoutingModule
  ],
  declarations: [SisterhoodGardenPage]
})
export class SisterhoodGardenPageModule {}
