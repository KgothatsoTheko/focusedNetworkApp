import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SisterhoodGardenPage } from './sisterhood-garden.page';

const routes: Routes = [
  {
    path: '',
    component: SisterhoodGardenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SisterhoodGardenPageRoutingModule {}
