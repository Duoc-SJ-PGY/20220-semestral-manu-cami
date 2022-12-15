import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Banco2PageRoutingModule } from './banco2-routing.module';

import { Banco2Page } from './banco2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Banco2PageRoutingModule
  ],
  declarations: [Banco2Page]
})
export class Banco2PageModule {}
