<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }
  
  ubicacion(){
    this.router.navigate(['/ubicacion']);
  }

  notificaciones(){
    this.router.navigate(['/notificaciones']);
  }
  
  condiciones(){
    this.router.navigate(['/condiciones']);
  }

  politicas()
  {
    this.router.navigate(['/privacidad']);
  }

  agradecimientos()
  {
    this.router.navigate(['/agradecimientos']);
  }

  ngOnInit() {
  }

}
=======
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  listaConfGest: Array<any> = [
  {
    id: 1,
    nombre: 'Ubicación',
    icono: 'location-outline',
  },
  {
    id: 2,
    nombre: 'Notificaciones',
    icono: 'notifications-outline',
  },
  ];
  listaConfLegal: Array<any> = [
  {
    id: 1,
    nombre: 'Condiciones de servicio',
    icono: 'document',
  },
  {
    id: 2,
    nombre: 'Política de privacidad',
    icono: 'warning-outline',
  },
  {
    id: 3,
    nombre: 'Agradecimientos',
    icono: 'color-wand-outline',
  },
  ];

  constructor() { }

  ngOnInit() {
  }

}
>>>>>>> 5192edfb4e6a0d0ab99b01474280bb62b835cf38
