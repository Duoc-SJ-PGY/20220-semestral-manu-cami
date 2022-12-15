import { Storage, IonicStorageModule} from '@ionic/storage-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Geolocation } from '@ionic-native/geolocation/ngx';

import { File } from '@awesome-cordova-plugins/file/ngx';
import { FileOpener } from '@awesome-cordova-plugins/file-opener/ngx';
import { SQLite } from '@ionic-native/sqlite/ngx';
//import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, IonicStorageModule.forRoot() ],
  providers: [Storage, IonicStorageModule, SQLite, Geolocation, { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, File, FileOpener],
  bootstrap: [AppComponent],
})
export class AppModule {}

