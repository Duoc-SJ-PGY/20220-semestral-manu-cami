import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


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
result: any;
//apiURL = 'http://127.0.0.1:5000/';
apiURL = 'assets/apis/productos/Productos.json';
apiURL2 = 'assets/apis/direcciones/mis_direcciones.json';

  constructor(
    private http: HttpClient,
    public alertController: AlertController,
    private storage: Storage
  ) { 
    
  }
  
  // ***********************************************************************
  // metodos de consulta a la BD
  
    getData1(id:Number) {
      return this.http.get(this.apiURL).pipe(retry(3));
    }

    getData() {
      return this.http.get(this.apiURL).pipe(retry(3));
    }
    
    
    getDirecciones() {
      return this.http.get(this.apiURL2).pipe(retry(3));
    }
    
  // ************************************************************************

 

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

  
  }








