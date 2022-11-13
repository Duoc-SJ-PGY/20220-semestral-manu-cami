import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {ObjectUnsubscribedError, Observable} from 'rxjs';
<<<<<<< HEAD
import { AlertController } from '@ionic/angular';
=======
>>>>>>> 5192edfb4e6a0d0ab99b01474280bb62b835cf38
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

  constructor(
<<<<<<< HEAD
    private http: HttpClient,
    public alertController: AlertController
  ) { 
    //this.listCarrito = this.setCantidad();
  }
  
  // metodos de consulta a la BD
=======
    private http: HttpClient
  ) { 
    this.listCarrito = this.setCantidad();
  }
  
>>>>>>> 5192edfb4e6a0d0ab99b01474280bb62b835cf38
  getData() {
    return this.http.get(this.apiURL + 'productos/').pipe(retry(3));
  }

  getData1(id:Number) {
    return this.http.get(this.apiURL + 'productos/'+id).pipe(retry(3));
  }
  
  //setear en 0 la cantidad de cada producto.
  setCantidad() {
    for (let i = 0; i < this.listCarrito.length; i++) {
      this.listCarrito[i].cantidad = 0;
    }
    return this.listCarrito;
  }
<<<<<<< HEAD

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
=======
  

  addCart(id: Number) {
       
    this.getData1(id).subscribe((res) => {
      if (this.listCarrito.indexOf(res) === -1){ //Si el objeto no existe en el carrito
        
        this.listCarrito.push(res);
      }
      else{
        alert("El producto ya se encuentra en el carrito");
      }
      this.cont += 1;
      console.log(this.listCarrito);
      //return this.cont.valueOf();
      return this.listCarrito;  
    });

  }
  }



>>>>>>> 5192edfb4e6a0d0ab99b01474280bb62b835cf38
