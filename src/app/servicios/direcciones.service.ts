import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DireccionesService {
  apiURL = '/assets/apis/direcciones/mis_direcciones.json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };

  constructor(
    private http:HttpClient
  ) { }
  
  getDirecciones():Observable<any>{
    return this.http.get(this.apiURL).pipe(retry(3));
  }
}
