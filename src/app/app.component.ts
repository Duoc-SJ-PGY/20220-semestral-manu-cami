import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { SQLite  } from '@ionic-native/sqlite/ngx';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {


  currentPageTitle = 'Dashboard';
  selectedIndex = 0;

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
    private storage: Storage,
    private sqlite: SQLite,

    
    ) {
    this.initializeApp();
      
  }

 
  initializeApp() {
    this.platform.ready().then(() => {
      
    });
  }
}
