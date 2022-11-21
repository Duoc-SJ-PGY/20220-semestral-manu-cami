import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

/*
export interface Producto {
  id_producto: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen: string;
  categoria: string;
}*/

@Injectable({
  providedIn: 'root'
})
export class ApiService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

listCarrito: any = [];
cont = 0;

apiURL = 'http://127.0.0.1:5000/';
//apiURL = 'lapileria.database.windows.net';

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private storage: Storage
  ) { 
    //this.listCarrito = this.setCantidad();
  }
  
  // ***********************************************************************
  // metodos de consulta a la BD
  // Consulta de productos
  getData() {
    return this.http.get(this.apiURL + 'productos/').pipe(retry(3));
  }

  getData1(id:Number) {
    return this.http.get(this.apiURL + 'productos/'+id).pipe(retry(3));
  }
  
  //para consultar las comunas.
  getComunas() {
    return this.http.get(this.apiURL + 'comunas/').pipe(retry(3));
  }


  // ************************************************************************

  //setear en 0 la cantidad de cada producto.
  setCantidad() {
    for (let i = 0; i < this.listCarrito.length; i++) {
      this.listCarrito[i].cantidad = 0;
    }
    return this.listCarrito;
  }

  // funciones de alerta 
  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'Producto',
      message: 'El producto ya se encuentra en el carrito',
      buttons: ['OK'],
  });
  await alert.present();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Producto',
      message: 'Producto agregado al carrito',
      buttons: ['OK'],
  });
  await alert.present();
  }

  // fin de funciones de alerta

  //** */ inicio de funciones de carrito /** */
  
  addCart(id: Number) {
    this.getData1(id).subscribe((res) => {
      
      this.listCarrito.push(res);
           
      console.log(this.listCarrito);
      
      return this.listCarrito;  
    });
  }



}




