import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterConfirmationPage } from './register-confirmation.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterConfirmationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterConfirmationPageRoutingModule {}
