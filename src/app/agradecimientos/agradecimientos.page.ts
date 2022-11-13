import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-agradecimientos',
  templateUrl: './agradecimientos.page.html',
  styleUrls: ['./agradecimientos.page.scss'],
})
export class AgradecimientosPage implements OnInit {

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
