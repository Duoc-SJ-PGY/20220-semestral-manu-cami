import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediosPagoPage } from './medios-pago.page';

const routes: Routes = [
  {
    path: '',
    component: MediosPagoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediosPagoPageRoutingModule {}
