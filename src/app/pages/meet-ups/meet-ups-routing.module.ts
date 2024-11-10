import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MeetUpsPage } from './meet-ups.page';

const routes: Routes = [
  {
    path: '',
    component: MeetUpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MeetUpsPageRoutingModule {}
