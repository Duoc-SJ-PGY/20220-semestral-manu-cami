import { retry } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiBancosService {
  apiURL = '/assets/apis/bancos/bancos.json';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })
  };
  constructor(
    private http:HttpClient

  ) { }

  getBancos():Observable<any>{
    return this.http.get(this.apiURL).pipe(retry(3));
  }

  postPago(obj:any){
    console.log("obj", obj);
    return localStorage.setItem('Compra', JSON.stringify(obj));
    

  }
}
