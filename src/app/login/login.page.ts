import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';

import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,) {

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }
    
  ngOnInit() {
  }
// Función para validar el formulario agregada el 29-10-2022
  async ingresar(){
    var f = this.formularioLogin.value;
    var usuario = JSON.parse(localStorage.getItem('usuario'));
    if(f.nombre == usuario.nombre && f.password == usuario.password){
      console.log("Usuario ingresado");
      
    }else{
      const alert = await this.alertController.create({
        header: '¡Datos incorrectos!',
        message: 'Los datos ingresados no son correctos.',
        buttons: ['Aceptar']
    });
    await alert.present();
    }
  }
}