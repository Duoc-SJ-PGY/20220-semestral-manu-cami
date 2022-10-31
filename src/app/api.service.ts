import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {retry} from 'rxjs/operators';
import {ObjectUnsubscribedError, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  })
};

listCarrito: any = [];
cont = 0;

apiURL = 'http://127.0.0.1:5000/';

  constructor(
    private http: HttpClient
  ) { }
  
  getData() {
    return this.http.get(this.apiURL + 'productos/').pipe(retry(3));
  }

  getData1(id) {
    return this.http.get(this.apiURL + 'productos/'+id).pipe(retry(3));
  }
  
  addCart(id: Number) {
       
    this.getData1(id).subscribe((res) => {
      if (this.listCarrito.indexOf(res) === -1){ //Si el objeto no existe en el carrito
        
        this.listCarrito.push(res);
      }
      else{
        alert("El producto ya se encuentra en el carrito");
      }
      this.cont += 1;
      console.log(this.listCarrito);
      //return this.cont.valueOf();
      return this.listCarrito;  
    });

  }
  }



