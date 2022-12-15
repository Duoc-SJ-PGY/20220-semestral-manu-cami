import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { DireccionesService } from '../servicios/direcciones.service';




@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit { 
  
  lista = [];
  direcciones:any;
  dir:any;
  comuna:any;
  dirSelected:any;
  
  total = localStorage.getItem('total');
  
  constructor(
    
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage,
    public direccionesService: DireccionesService
  ) {
    
        
  }
  
/// ****** **********************
// Sección de alertas...

  async Formulario(){
    const alert = await this.alertController.create({
      header: 'Pago',
      message: 'Se requiere llenar todos los campos',
      buttons: ['OK'],
  });
  await alert.present();
  }
  async mediopago(){
    const alert = await this.alertController.create({
      header: 'Pago',
      message: 'Será redirigido a la página de pago',
      buttons: ['OK'],
  });
  await alert.present();
  }

// *****************************************

  //Para recuperar el carro de compras
  traerCarrito(){
    var storelist = localStorage.getItem('carrito');
    if(storelist == null){
      this.lista = [];
      console.log('no hay nada en el carrito');
    } else {
      this.lista = JSON.parse(storelist);
      console.log(this.lista);
    }
    return this.lista;
  }
 
  confirmarPago(){
    var direccion = this.direcciones.direccion;
    var nombre = (<HTMLInputElement>document.getElementById('inputRecibe')).value;
    var fono = (<HTMLInputElement>document.getElementById('inputFono')).value;
    let recibe = {
      nombre: nombre,
      fono: fono,
      direccion: direccion
    };
    if(direccion == '' || nombre == '' || fono == ''){
      this.Formulario();
    } else {
      //localStorage.removeItem('carrito');
      this.mediopago();
      
      localStorage.setItem('recibe', JSON.stringify(recibe));
      this.router.navigate(['/medio-pago']);
    }
    
  }
  getDirecciones(){
    this.direccionesService.getDirecciones().subscribe((data: {}) => {
      this.direcciones = data;
      console.log(data);
    });
  }

  setDireccion(){
    //this.comuna = this.dirSelected.comuna;
    this.dir = this.dirSelected.direccion;
    console.log(this.dirSelected);
    return this.dir;
  }

  ngOnInit() {
    this.getDirecciones();
    this.traerCarrito();
    
  }


}
