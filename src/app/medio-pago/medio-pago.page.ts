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
    this.presentAlert();
  }

  pagoCredito(){
    this.presentAlert();
  }

  pagoPre(){
    this.presentAlert();
  }


  anularcompra(){
    localStorage.removeItem('carrito');
    localStorage.removeItem('total');
    this.router.navigate(['/inicio']);
  }

  ngOnInit() {
  }

}
