import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-medio-pago',
  templateUrl: './medio-pago.page.html',
  styleUrls: ['./medio-pago.page.scss'],
})
export class MedioPagoPage implements OnInit {
  pago = localStorage.getItem('total');
  medio = {
    id:0, 
    nombre: '',
  }
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage
  ) {
  }
  ///************************** */
  // alertas...

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Medio de Pago',
      message: 'Medio aún no disponible',
      buttons: ['OK'],
  });
  await alert.present();
  }



  //********************************* */
  pagOnePay(){
    this.presentAlert();
  }

  pagoDebito(){
    //this.presentAlert();
    this.medio.id = 1;
    this.medio.nombre = 'debito';
    localStorage.setItem('medio', JSON.stringify(this.medio));
    this.router.navigate(['/banco']);
    console.log(this.medio);
  }

  pagoCredito(){
    //this.presentAlert();
    this.medio.id = 2;
    this.medio.nombre = 'credito';
    localStorage.setItem('medio', JSON.stringify(this.medio));
    this.router.navigate(['/banco']);
    console.log(this.medio);
  }

  pagoPre(){
    this.presentAlert();
  }


  anularcompra(){
    localStorage.removeItem('carrito');
    localStorage.removeItem('total');
    //this.listaCart = [];
    this.api.listCarrito = [];
    this.router.navigate(['/inicio']);
  }

  ngOnInit() {
  }

}
