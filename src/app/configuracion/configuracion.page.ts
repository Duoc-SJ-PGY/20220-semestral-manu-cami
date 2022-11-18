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

