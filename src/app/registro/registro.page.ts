<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public navCtrl: NavController,
              public router: Router) {
                
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('' ,Validators.required),
      password: new FormControl('' ,Validators.required),
      confirmacionPassword: new FormControl('' ,Validators.required)
   });

  }
  ngOnInit(){
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: '¡Datos incompletos!',
        message: 'Debe ingresar todos los datos.',
        buttons: ['Aceptar']
    });
    await alert.present();
    return;
    }

    if(f.password != f.confirmacionPassword){
      const alert = await this.alertController.create({
        header: '¡Error de Contraseña!',
        message: 'Las contraseñas no coinciden.',
        buttons: ['Aceptar']
    }); 
    await alert.present();
    return;
  }

    if (localStorage.getItem('usuario') != null){
      const alert = await this.alertController.create({
        header: '¡Error!',
        message: 'Ya existe un usuario registrado.',
        buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }
  

  const usuario = {
    nombre: f.nombre,
    password: f.password 
  };
    const alert = await this.alertController.create({
      header: '¡Usuario Registrado!',
      message: 'Bienvenid@',
      buttons: ['Aceptar']
    });
    await alert.present();

    localStorage.setItem('usuario', JSON.stringify(usuario));
    //this.navCtrl.navigateRoot('/tablinks/login');
    this.router.navigate(['/tablinks/login']);
    
  }

}

=======
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController} from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public navCtrl: NavController) {
                
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('' ,Validators.required),
      password: new FormControl('' ,Validators.required),
      confirmacionPassword: new FormControl('' ,Validators.required)
   });

  }
  ngOnInit(){
  }

  async guardar(){
    var f = this.formularioRegistro.value;
    
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: '¡Datos incompletos!',
        message: 'Debe ingresar todos los datos.',
        buttons: ['Aceptar']
    });
    await alert.present();
    return;
  }



  const usuario = {
    nombre: f.nombre,
    password: f.password 
  };

    localStorage.setItem('usuario', JSON.stringify(usuario));

  }

}

>>>>>>> 5192edfb4e6a0d0ab99b01474280bb62b835cf38
