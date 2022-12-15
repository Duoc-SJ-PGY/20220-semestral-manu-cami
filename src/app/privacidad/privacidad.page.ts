import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-privacidad',
  templateUrl: './privacidad.page.html',
  styleUrls: ['./privacidad.page.scss'],
})
export class PrivacidadPage implements OnInit {
  isModalOpen = false;
  constructor(
    private router: Router,
    public alertController: AlertController,
    private route: ActivatedRoute,
    private api: ApiService
  ) { }
  
  gotoConfig(){
    this.router.navigate(['/configuracion']);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  ngOnInit() {
  }

}
