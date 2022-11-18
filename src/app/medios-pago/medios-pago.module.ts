import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediosPagoPageRoutingModule } from './medios-pago-routing.module';

import { MediosPagoPage } from './medios-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediosPagoPageRoutingModule
  ],
  declarations: [MediosPagoPage]
})
export class MediosPagoPageModule {}
