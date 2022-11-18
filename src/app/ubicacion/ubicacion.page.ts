import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }
  
  gotoConfig(){
    this.router.navigate(['/configuracion']);
  }

  ngOnInit() {
  }

}
