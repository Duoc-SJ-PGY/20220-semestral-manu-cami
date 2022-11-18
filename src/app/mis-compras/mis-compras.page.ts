import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-mis-compras',
  templateUrl: './mis-compras.page.html',
  styleUrls: ['./mis-compras.page.scss'],
})
export class MisComprasPage implements OnInit {

  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController

  ) { }
  

  gotoperfil()
  {
    this.router.navigate(['/tablinks/perfil']);
  }
  
  ngOnInit() {
  }

}
