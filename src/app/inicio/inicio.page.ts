import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AlertController, IonSlides } from '@ionic/angular';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
 
  productos: any = [];
  
  //inicio de componentes del carrusel
  miArray = [
    {id: 1, imagen:'https://cdnx.jumpseller.com/blanca-papeleria/image/28191425/resize/260/260?1665014524', descripcion:'Tombow mono graph'},
    {id: 2, imagen:'https://cdnx.jumpseller.com/blanca-papeleria/image/28191441/resize/260/260?1665014564', descripcion:'Portaminas Tombow'},
    {id: 3, imagen:'https://cdnx.jumpseller.com/blanca-papeleria/image/28191503/resize/260/260?1665014643', descripcion:'Clip Pokémon'},
    {id: 4, imagen:'https://cdnx.jumpseller.com/blanca-papeleria/image/28191462/resize/260/260?1665014584', descripcion:'Coleto uni Jetstream'},
  ];
  @ViewChild('mySlider') slides: IonSlides;
  //fin componentes del carrusel
  
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

   //para recorrer el carrusel.
   swipeNext(){
    this.slides.slideNext();
    }


    //método para buscar en el SearchBar
    /*
    getItems(ev: any) {
      let val = ev.target.value;
      if(val && val.trim() != ''){
        this.productos = this.productos.filter((item) => {
          return (item.nombre_producto.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }
    }*/

    /*  ************************
      * Funciones de alertas *
    */
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

  /*  método básico sin usar por el momento...
  agregarCarrito(id:number){
    
    this.presentAlert();
    return this.api.addCart(id);
  }
  */
  

  /*
  el metodo consulta al array generado en el service APi si es que el producto no está
  en el carrito y lo agrega, si ya está en el carrito muestra un mensaje y retorna 0.
  */
  agregarCarrito(id:number){
    let existe = false;
    for (let i = 0; i < this.api.listCarrito.length; i++) {
      if (this.api.listCarrito[i].id_producto == id) {
        existe = true;
        break;
      }
    }
    var index = this.api.listCarrito.indexOf(id);
    if (index === -1 && existe == false) {
      this.presentAlert();
      console.log("agregado");
      return this.api.addCart(id); 
             
    }
    else {
      this.presentAlert2();
      return console.log(0);
    }  
   
  }

  //para cambiar al page del detalle.
  gotoCarrito(){
    this.router.navigate(['/detalle']);
  }


  ngOnInit() {
    
  }
}
