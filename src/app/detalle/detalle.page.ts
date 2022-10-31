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
  
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) { 

    this.listaCart = this.api.listCarrito;
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

  cantidad (id: Number) {
    const cant = document.getElementById("cantidad");
    const real = parseInt(cant.innerHTML);
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        this.listaCart[i].cantidad = real;
        break;
      }
    }
    return this.listaCart;
  }

  calcMonto(id: Number) {
    let monto = 0;
    for (let i = 0; i < this.listaCart.length; i++) {
      if (this.listaCart[i].id_producto == id) {
        monto = this.listaCart[i].precio * this.listaCart[i].cantidad;
        break;
      }
    }
    return monto;
  }

 
  gotoProductos() {
    this.router.navigate(['../inicio']);
  }
  
  ngOnInit() {
    
  }
  }
  


