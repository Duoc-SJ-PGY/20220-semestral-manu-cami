import { ApiBancosService } from './../servicios/api-bancos.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';

import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';


import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;

import 'pdfmake/build/vfs_fonts';


@Component({
  selector: 'app-recibo',
  templateUrl: './recibo.page.html',
  styleUrls: ['./recibo.page.scss'],
})
export class ReciboPage implements OnInit {
  
  pdfObj: any;
  docDefinition: any;

  //aqui se llaman los valores que se presentarán en el recibo de la compra...
  compra = JSON.parse(localStorage.getItem('Compra'));
  total = localStorage.getItem('total');
  medio = JSON.parse(localStorage.getItem('medio'));
  cliente = JSON.parse(localStorage.getItem('cliente'));
  carrito = JSON.parse(localStorage.getItem('carrito'));
  recibe = JSON.parse(localStorage.getItem('recibe'));

  // Para obtener la fecha y hora...
  fecha = new Date();
  dia = this.fecha.getDate();
  mes = this.fecha.getMonth() + 1;
  anio = this.fecha.getFullYear();
  hora = this.fecha.getHours().toString();
  minuto = this.fecha.getMinutes().toString();



  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage,
    public navCtrl: NavController,
    public apiBancos: ApiBancosService
    //private file: File,
    //private fileOpener: FileOpener   

  ) {  }
  
  ngOnInit() {
    
  }
  async pdf(){
    const alert = await this.alertController.create({
      header: 'PDF',
      message: 'Se ha generado el PDF',
      buttons: ['OK'],
  });
  await alert.present();
  }

// Con la siguiente función se genera el PDF mediante un archivo virtual con definiciones de estilo y contenido
// Se utiliza la librería pdfMake y se agregan los datos recopilados en el proceso de compra.

  generarPDF(){
    this.pdf();
    
    var fecha2 = this.dia + "/" + this.mes + "/" + this.anio;
    var hora = this.hora + ":" + this.minuto;
    this.docDefinition = {
       content: [
        
          {text: '"Lapilería" Tienda de artículos de papelería', style: 'header'},
          'En el siguiente documento se presentará el detalle de su compra',
                  
        {text: 'Datos del usuario', style: 'subheader'},
        {
          style: 'tableExample',
          table: {
            body: [
              ['Cliente', 'Rut', 'Tarjeta', 'Cuotas', 'Total'],              
              [this.cliente.nombre, this.cliente.rut, this.compra.medio, this.compra.cuotas, this.compra.monto],              
            ]
          }
        },
        {text: 'Productos', style: 'subheader'},        
        {
          style: 'tableExample',
          table: {
            body: [
              ['Cantidad', 'SKU','Producto', 'Precio c/u'],              
              [this.carrito[0].cantidad, this.carrito[0].sku, this.carrito[0].nombre_producto, this.carrito[0].precio],
              
              
                           
            ]
          }
        },
        {text: 'Recepción del producto', style: 'subheader'},        
        {
          style: 'tableExample',
          table: {
            body: [
              ['Quien recibe', 'Direccion','Fono Contacto'],              
              [this.recibe.nombre, this.cliente.direccion, this.recibe.fono]
                           
            ]
          }
        },
        {text: '', style: 'subheader'},        
        {
          style: 'tableExample',
          table: {
            body: [
              ['Fecha', 'Hora'],              
              [fecha2, hora,]
                           
            ]
          }
        },
        {text: 'Muchas Gracias por su compra.', style: 'subheader'}
        
      ]
    }
    this.pdfObj = pdfMake.createPdf(this.docDefinition);
  
    
    return this.pdfObj.download();
     
  }
  
  goInicio(){
    this.navCtrl.navigateForward('inicio');
  }


  }

    

 




