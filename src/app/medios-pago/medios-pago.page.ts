import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-medios-pago',
  templateUrl: './medios-pago.page.html',
  styleUrls: ['./medios-pago.page.scss'],
})
export class MediosPagoPage implements OnInit {
  
  medio : any = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController

  ) { 
    this.medio = JSON.parse(localStorage.getItem('mediopago'));
    console.log(this.medio);
  }
  

  gotoperfil2()
  {
    this.router.navigate(['/tablinks/perfil']);
  }
  ngOnInit() {
    console.log(this.medio);
  }

}
