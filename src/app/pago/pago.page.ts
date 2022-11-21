import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-pago',
  templateUrl: './pago.page.html',
  styleUrls: ['./pago.page.scss'],
})
export class PagoPage implements OnInit {
  
  lista = [];
  
  total = localStorage.getItem('total');
  
  constructor(
    
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage
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
    var direccion = (<HTMLInputElement>document.getElementById('inputDir')).value;
    var nombre = (<HTMLInputElement>document.getElementById('inputRecibe')).value;
    var fono = (<HTMLInputElement>document.getElementById('inputFono')).value;
    
    if(direccion == '' || nombre == '' || fono == ''){
      this.Formulario();
    } else {
      localStorage.removeItem('carrito');
      this.mediopago();
      this.router.navigate(['/medio-pago']);
    }
    
  }

  ngOnInit() {
    
    this.traerCarrito();
    
  }


}
