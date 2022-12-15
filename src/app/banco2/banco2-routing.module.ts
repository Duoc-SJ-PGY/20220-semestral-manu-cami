import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Banco2Page } from './banco2.page';

const routes: Routes = [
  {
    path: '',
    component: Banco2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Banco2PageRoutingModule {}
