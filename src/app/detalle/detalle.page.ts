import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  cart = [];
  listaCart: any = [];
  formPrecio=0;
  //total = 0;
  val_prod = 0;
  cant = 0;
  precio = 0;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage
  ) { 
    // Se procede a obtener carrito de compras de la API a un array this.listacart

    this.listaCart = this.api.listCarrito;
   

  }
// ********************************************
// Sección de alertas.
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Carrito',
      message: 'el producto no puede ser 0',
      buttons: ['OK'],
  });
  await alert.present();
  }

  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'Carrito',
      message: 'No hay productos en el carrito',
      buttons: ['OK'],
  });
  await alert.present();
  }



//*************************************************** */
  delCarrito(id: Number) {
    for (let i = 0; i < this.listaCart.length; i++) {
      
      if (this.listaCart[i].id_producto == id) {
        this.listaCart.splice(i, 1);
        
        break;
      }
    }
    
    console.log(this.listaCart);
  }


  
  addCantidad(id: Number) {
    let cant = 0;
    let precio = 0;

    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        if(this.listaCart[i].cantidad > this.api.listCarrito[i].cantidad){
          alert('Excede el máximo');
          break;
        }
        else {
          
          this.listaCart[i].cantidad += 1;
          cant = this.listaCart[i].cantidad;
          
        }        
        precio = this.listaCart[i].precio;
        break;                 
          
        }
    }    
    this.formPrecio = precio * cant;
    return this.listaCart;
  }


  removeCantidad(id: Number) {
    let cant = 0;
    let precio = 0;

    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        if(this.listaCart[i].cantidad == 1){
          this.presentAlert();
          this.delCarrito(id);
          break;
        }
        else{
          this.listaCart[i].cantidad -= 1;
          cant= this.listaCart[i].cantidad;
          precio = this.listaCart[i].precio;
        }
        
        //precio = this.listaCart[i].precio;
        this.listaCart[i].precio = precio*cant;
        break;
               
      }
    }
        
    this.formPrecio = precio;
    return this.listaCart;
  }

  //Volver a productos.
  gotoProductos() {
    this.router.navigate(['../inicio']);
  }

  //Ir a página del pago
  gotoPago(){
    
    if (this.listaCart.length == 0) {
      this.presentAlert2();
    }else{
      for(let i = 0; i < this.listaCart.length; i++){
        this.cant = this.listaCart[i].cantidad;
        
        this.cart.push(this.listaCart[i]);
        
        }
        localStorage.setItem('total', this.formPrecio.toString());
        this.listaCart = [];
        this.api.listCarrito = [];
      
      localStorage.setItem('carrito', JSON.stringify(this.cart));
      
      this.router.navigate(['../pago']);
    }
    
  }

     
  
  ngOnInit() {
       //para incializar la cantidad en 1 de cada producto del carrito
    for (let i = 0; i < this.listaCart.length; i++) {
     
      this.listaCart[i].cantidad = 1;
      this.formPrecio += this.listaCart[i].precio * this.listaCart[i].cantidad;
      //this.listaCart[i].precio = this.formPrecio;
    }
    console.log(this.listaCart); 
  }
  }
  



