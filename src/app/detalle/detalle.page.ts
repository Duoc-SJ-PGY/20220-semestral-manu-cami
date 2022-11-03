import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { getElement } from 'ionicons/dist/types/stencil-public-runtime';
//import { $ } from 'protractor';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {
  
  listaCart: any = [];
  cant = 0;
  formPrecio: number;
  total = 0;

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    this.listaCart = this.api.listCarrito;

    for (let i = 0; i < this.listaCart.length; i++) {
      this.listaCart[i].cantidad = 0;
    }
    console.log(this.listaCart);

   

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

  updateCantidad (id: Number) {
    let agregado = false;
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        //this.listaCart[i].cantidad = parseInt ((<HTMLInputElement>document.getElementById("cantidad")).value);
        //console.log(parseInt ((<HTMLInputElement>document.getElementById("cantidad")).value));
        this.formPrecio = this.listaCart[i].precio * this.listaCart[i].cantidad;
        agregado = true;
        return this.formPrecio;
        //break;
      }
    
    }
    //return this.calcMonto(id);
    
  }

  

  addCantidad(id: Number) {
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        this.listaCart[i].cantidad += + 1;
        //this.cant = this.listaCart[i].cantidad;
        this.formPrecio = this.listaCart[i].precio * this.listaCart[i].cantidad;
        
        return this.listaCart[i].cantidad;
        //break;
        
        
      }
    }
    
  }

  removeCantidad(id: Number) {
    
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        this.listaCart[i].cantidad -=  1 ;
        //this.cant = this.listaCart[i].cantidad;
        this.formPrecio = this.listaCart[i].precio * this.listaCart[i].cantidad;
        
        return this.listaCart[i].cantidad;
        //break;
      }
    }
    
  }

  

  gotoProductos() {
    this.router.navigate(['../inicio']);
  }
  
  ngOnInit() {
    
  }
  }
  


