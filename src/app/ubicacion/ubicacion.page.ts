import { Component,ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage {
 
  @ViewChild('map') mapRef: ElementRef<HTMLElement>;
  newMap: GoogleMap; /* 
  center: any ={
    lat: -33.5000852,
    lng: -70.6184815,
  };
  */
  
  
    
  constructor(
    private router: Router,
    private geolocation: Geolocation,
    public alertController: AlertController,
     
  ) {  }
  getPosition(){
    
    this.geolocation.getCurrentPosition().then((resp) => {
      resp.coords.latitude      
      resp.coords.longitude        
      console.log("Latitud: " + resp.coords.latitude);
      console.log("Longitud: " + resp.coords.longitude);
     }).catch((error) => {
       console.log('Error getting location', error);
      });
    this.presentAlert();        
         
  }
  
  ngOnInit() {

    this.getPosition();
      
  }
  
  ngAfterViewInit(){    
    this.createMap();
  }
  
  /* // opcional agregar esto en el config del mapa
  center:{
          lat: this.latitud,
          lng: this.longitud,
        }
  ó      
  config: {
        center: this.center,        
        zoom: 13,
      },
  */

  async createMap() {
    
    this.newMap = await GoogleMap.create({
      id: 'capacitor-google-maps',
      element: this.mapRef.nativeElement,
      apiKey: environment.google_maps_api_key,
      config: {
        center: {
          lat: -33.5000852,
          lng: -70.6184815,
        },        
        zoom: 16,
      },
    });
  }  
  
  gotoConfig(){
    this.router.navigate(['/configuracion']);
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Geolocalización',
      subHeader: 'Ubicación actual',
      message: 'Latitud: ' + -33.5000852 + ' Longitud: ' + -70.6184815,
      buttons: ['OK']
    });

    await alert.present();
  }
}



