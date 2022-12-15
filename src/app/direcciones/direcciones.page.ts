import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {
  lista:any;
  
  adDir = [];
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage

  ) { 
    this.adDir = JSON.parse(localStorage.getItem('direcciones'));
    console.log(this.adDir);
         
    }  
  
  gotoperfil()
  {
    this.router.navigate(['/tablinks/perfil']);
  }
  
  ngOnInit() {
    this.api.getDirecciones().subscribe((data)=>{
      console.log(data);
      this.lista = data;
      //localStorage.setItem('direcciones', JSON.stringify(this.lista));
    });
  
    console.log(this.lista);
  }

  addDireccion(){
    //bla
  }
}
