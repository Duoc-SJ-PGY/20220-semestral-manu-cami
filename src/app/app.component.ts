import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  currentPageTitle = 'Dashboard';

  appPages = [
    {
      title: 'Productos',
      url: 'tablinks/inicio',
      icon: 'pricetags'
    },
    {
      title: 'Perfil',
      url: 'tablinks/perfil',
      icon: 'film'
    },
    {
      title: 'Settings',
      url: 'tablinks/configuracion',
      icon: 'settings'
    },
    {
      title: 'CerrarSesion',
      url: 'tablinks/login',
      icon: 'log-out'
    }
  ];

  constructor(
    private platform: Platform,
    
    ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
    });
  }
}
