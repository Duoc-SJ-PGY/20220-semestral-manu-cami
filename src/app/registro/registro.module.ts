import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
//import { LoginPageRoutingModule } from './login-routing.module';

import { RegistroPageRoutingModule } from './registro-routing.module';

import { RegistroPage } from './registro.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, // agregado 29-10-22
    IonicModule,
    RegistroPageRoutingModule
  ],
  declarations: [RegistroPage]
})
export class RegistroPageModule {}
