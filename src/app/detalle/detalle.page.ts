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
  val_prod = 0;
  cant = 0;
  precio = 0;
  data = localStorage.getItem('carrito');
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage
  ) { 
    // Se procede a obtener carrito de compras de la API a un array this.listacart

    //this.listaCart = this.api.listCarrito;
    this.listaCart = JSON.parse(this.data);

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
        localStorage.removeItem('carrito');
        localStorage.setItem('carrito', JSON.stringify(this.listaCart));
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
        //if(this.listaCart[i].cantidad > this.api.listCarrito[i].cantidad){
        if(this.listaCart[i].cantidad > 99){
          alert('Excede el máximo');
          break;
        }
        else {
          
          this.listaCart[i].cantidad += 1;
          //cant = this.listaCart[i].cantidad;
          
        }        
        //precio = this.listaCart[i].precio;
        break;                 
          
        }
    }    
    //this.formPrecio = precio * cant;
    this.cambioPrecio();
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
          //cant= this.listaCart[i].cantidad;
          //precio = this.listaCart[i].precio;
        }
        
        //precio = this.listaCart[i].precio;
        //this.listaCart[i].precio = precio*cant;
        break;
               
      }
    }
        
    //this.formPrecio = precio;
    this.cambioPrecio();
    return this.listaCart;
  }

  //Volver a productos.
  gotoProductos() {
    localStorage.removeItem('carrito');
    localStorage.setItem('carrito', JSON.stringify(this.listaCart));
    this.router.navigate(['../inicio']);
  }

  //Ir a página del pago
  gotoPago(){
    let elemento = 0;
    var existe = localStorage.getItem('carrito');
    var esto:any = []
    esto = JSON.parse(existe);
    if (this.listaCart.length == 0) { 
      this.presentAlert2();
    }else if (existe == null) {
        for(let i = 0; i < this.listaCart.length; i++){
            
              this.cart.push(this.listaCart[i]);
                                  
        }
        localStorage.setItem('carrito', JSON.stringify(this.cart));
    }else if (existe != null) {
      //let elemento = 0;
      for(let i = 0; i < esto.lenght; i++){
        if (this.listaCart[i].id_producto == esto[i].id_producto){
          elemento +=1; break;
        }
      }
        if(elemento == 0){
          for(let i = 0; i < this.listaCart.length; i++){
            this.cart.push(this.listaCart[i]);
          }
          localStorage.setItem('carrito', JSON.stringify(this.cart));
        }  
         
        localStorage.setItem('total', this.formPrecio.toString());
        //localStorage.setItem('carrito', JSON.stringify(this.cart));
        this.router.navigate(['../pago']);
        
      }
      return;
    }
  
     
    
    
    
    cambioPrecio(){
      this.formPrecio = 0;
      for (let i = 0; i < this.listaCart.length; i++) {
        this.formPrecio += this.listaCart[i].precio * this.listaCart[i].cantidad;
      }
      localStorage.setItem('total', this.formPrecio.toString());
      return this.formPrecio;
    } 

     
  
  ngOnInit() {
       //para incializar la cantidad en 1 de cada producto del carrito
       
    for (let i = 0; i < this.listaCart.length; i++) {
     
      //this.listaCart[i].cantidad = 1;
      this.formPrecio += this.listaCart[i].precio * this.listaCart[i].cantidad;
      //this.listaCart[i].precio = this.formPrecio;
    }
    console.log(this.listaCart); 
    
  }

  }
  




