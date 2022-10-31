import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 //[x: String]: any;
  productos: any = [];
  
  constructor(
    private router: Router,
    private api: ApiService,
    public alertController: AlertController
  ) {
    this.api.getData().subscribe(data => {
      this.productos = data;
      //console.log(this.productos);
    });
   }

   async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Carrito',
      message: 'Producto agregado al carrito',
      buttons: ['OK'],
  });
  await alert.present();
  }

  agregarCarrito(id:number){
    
    this.presentAlert();
    //return this.api.listCarrito();
    return this.api.addCart(id);
  }
  
  gotoCarrito(){
    this.router.navigate(['/detalle']);
  }

  ngOnInit() {
  }
}
