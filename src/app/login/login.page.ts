import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


import { AlertController, NavController} from '@ionic/angular';
import { stringify } from 'querystring';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  logueado = false;
  formularioLogin: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              private api: ApiService,
              private router: Router,) {

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
    var cliente = JSON.parse(localStorage.getItem('cliente'));
    usuario = {nombre:f.nombre, password:f.password};
    
    if(usuario == null){
      if (f.nombre != cliente.nombre){
        const alert = await this.alertController.create({
          header: '¡Usuario!',
          message: 'El usuario no existe.',
          buttons: ['Aceptar']
          });
        await alert.present();
      }
      
    }
    else{
          if(f.nombre == cliente.nombre && f.password == cliente.password){
            
                this.logueado = true;
                const alert = await this.alertController.create({
                  header: '¡Login correcto!',
                  message: 'Bienvenid@ ' + f.nombre,
                  buttons: ['Aceptar']
                  });
                  await alert.present();
                  localStorage.setItem('usuario',JSON.stringify(usuario));
                  
                  this.router.navigate(['/tablinks/inicio']);

                  //console.log("Usuario ingresado");
            }
          else{
                  
            const alert = await this.alertController.create({
              header: '¡Datos incorrectos!',
              message: 'Los datos ingresados no son correctos.',
              buttons: ['Aceptar']
              });
            await alert.present();
          }
    }
   
  }   
  }


