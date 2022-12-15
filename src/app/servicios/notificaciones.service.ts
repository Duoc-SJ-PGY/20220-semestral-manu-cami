import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { PushNotifications } from '@capacitor/push-notifications';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {

  constructor(
    private platform: Platform

  ) { }
  
}
