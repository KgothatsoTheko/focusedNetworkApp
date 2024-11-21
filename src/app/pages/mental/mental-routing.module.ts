import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MentalPage } from './mental.page';

const routes: Routes = [
  {
    path: '',
    component: MentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentalPageRoutingModule {}
