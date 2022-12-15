import { BaseDatosService } from './../servicios/base-datos.service';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, NavController, ModalController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { ComunasService } from '../servicios/comunas.service';
import { ValidaRutService } from '../servicios/valida-rut.service';
//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite, SQLiteObject} from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  comunas:any = [];
  comuSelected:any;
  sqlobj : SQLiteObject;
  formularioRegistro: FormGroup;
  constructor(public fb: FormBuilder,
              public alertController: AlertController,
              public navCtrl: NavController,
              public router: Router,
              public comunasService: ComunasService,
              public validaRut: ValidaRutService,
              public sqlite: SQLite,
              public modalController: ModalController,
              //public baseDatos: BaseDatosService
              ) {
              
               
                
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('' ,Validators.required),
      password: new FormControl('' ,Validators.required),
      confirmacionPassword: new FormControl('' ,Validators.required),
      rut: new FormControl('' ,Validators.required),
      tarjeta: new FormControl('' ,Validators.required),
      direccion: new FormControl('' ,Validators.required)
      //comuna: new FormControl('' ,Validators.required),
           

   });

  }
  ngOnInit(){
    this.getComunas();       
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
    var rut: string = f.rut;
    console.log("rut", rut);
    this.validaRut.valRut(rut);

  const usuario = {
    nombre: f.nombre,
    password: f.password,
    
  };
  const cliente = {
    nombre: f.nombre,
    password: f.password,
    rut: rut,//f.rut,
    tarjeta: f.tarjeta,
    direccion: f.direccion,
    comuna: this.setComuna()//this.comuSelected//f.comuna 
  };
  const direcciones =[{
    id: 1,
    direccion: f.direccion,
    comuna: this.setComuna(),
    rut: rut
  }];

    const alert = await this.alertController.create({
      header: '¡Usuario Registrado!',
      message: 'Bienvenid@',
      buttons: ['Aceptar']
    });
    await alert.present();
    
  

    localStorage.setItem('cliente', JSON.stringify(cliente));
    localStorage.setItem('usuario', JSON.stringify(usuario));
    localStorage.setItem('direcciones', JSON.stringify(direcciones));

    this.router.navigate(['/tablinks/login']);
   
    // procedimientos para almacenar en la BD
    /*
    this.baseDatos.crearTclientes();
    this.baseDatos.crearTdirecciones();
    this.baseDatos.insertarCliente(usuario.nombre, usuario.password, usuario.rut, usuario.tarjeta, usuario.direccion, usuario.comuna);
    this.baseDatos.insertarDireccion(usuario.direccion, usuario.comuna, usuario.rut);
    */
    //this.navCtrl.navigateRoot('/tablinks/login');
    
    
  }

  setComuna(){
    console.log("comuna", this.comuSelected.nom_comuna);
    return this.comuSelected.nom_comuna;
  }

  getComunas(){
    this.comunasService.getComunas().subscribe(
      response =>{
        console.log("respuesta:", response);
        this.comunas = response;
        //await this.comunas; 
      },
      error =>{
        console.log(error);
      }
    )
  }
}