import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

//import { AsyncLocalStorage } from 'async_hooks';
@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  usuario = JSON.parse(localStorage.getItem('usuario'));
  nom:any; 
  
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController

  ) { }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Sesion',
      message: 'La sesión se ha cerrado',
      buttons: ['OK'],
  });
  await alert.present();
  }
  

  closeSesion(){
    this.nom = "Invitado";
    localStorage.removeItem('usuario');
    this.presentAlert();
    //localStorage.clear();
    this.router.navigate(['/tablinks/login']);
  }

  myDirecciones(){
    this.router.navigate(['/direcciones']);
    //direcciones de la tabla usuario
  }

  myMediosPago()
  {
    this.router.navigate(['/medios-pago']);
    //llamado a los medios de pago
  }

  myCompras()
  {
    this.router.navigate(['/mis-compras']);
    //las compras realizadas
  }

  ngOnInit() {
    if (this.usuario == null){
      this.nom = "Invitado";
    }else{
      this.nom = this.usuario.nombre;
    }
  }

}

