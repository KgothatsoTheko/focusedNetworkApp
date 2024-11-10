import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuggetsPage } from './nuggets.page';

const routes: Routes = [
  {
    path: '',
    component: NuggetsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuggetsPageRoutingModule {}
