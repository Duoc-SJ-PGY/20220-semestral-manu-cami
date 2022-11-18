import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
import { AlertController } from '@ionic/angular';
//import { $ } from 'protractor';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  
  listaCart: any = [];
  formPrecio=0;
  //total = 0;
  

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController
  ) { 
    // Se procede a obtener carrito de compras de la API a un array this.listacart

    this.listaCart = this.api.listCarrito;

    //para incializar la cantidad en 1 de cada producto del carrito
    for (let i = 0; i < this.listaCart.length; i++) {
     
      this.listaCart[i].cantidad = 1;
      //this.total += this.listaCart[i].precio * this.listaCart[i].cantidad;
    }
    console.log(this.listaCart);  
    

  }

  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'Carrito',
      message: 'el producto no puede ser 0',
      buttons: ['OK'],
  });
  await alert.present();
  }

  delCarrito(id: Number) {
    for (let i = 0; i < this.listaCart.length; i++) {
      
      if (this.listaCart[i].id_producto == id) {
        this.listaCart.splice(i, 1);
        
        break;
      }
    }
    
    console.log(this.listaCart);
  }


/*
  updateCantidad (id: Number) {
    
    let agregado = false;
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
                
        this.formPrecio = this.listaCart[i].precio * this.listaCart[i].cantidad;
       
      }
          
      agregado = true;
      //this.total += this.formPrecio;

      return this.formPrecio;
    }
      
  }
  */

  
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
          
        }
        //this.listaCart[i].cantidad -=  cant; 
        precio = this.listaCart[i].precio;
        break;
               
      }
    }
    //this.total = this.total - (precio * cant);
    this.formPrecio = precio * cant;
    //return this.listaCart.cantidad, this.formPrecio, this.total;
    //console.log(this.total);
    return this.listaCart;
  }
/*
  totalCarrito()
  {
    this.total = 0;
    for (let i = 0; i < this.listaCart.length; i++) {
      this.total += this.listaCart[i].precio * this.listaCart[i].cantidad;
    }
    return this.total;
  }
*/
  gotoProductos() {
    this.router.navigate(['../inicio']);
  }
  
  ngOnInit() {
        
  }
  }
  



