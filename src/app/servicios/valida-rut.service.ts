import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ValidaRutService {

  esValido: boolean;
  dv: string;
  xrut: string;
  //rut: string = "15.368.980-6";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    })  
  };
  
  constructor(
    private http: HttpClient,
    public alertController: AlertController    
  ) { }
  
  // alertas...
  async presentAlert(){
    const alert = await this.alertController.create({
      header: 'RUT',
      message: 'El rut no es valido',
      buttons: ['OK'],
  });
  await alert.present();
  }
  
  async presentAlert2(){
    const alert = await this.alertController.create({
      header: 'RUT',
      message: 'El rut valido',
      buttons: ['OK'],
  });
  await alert.present();
  }
  
  // fin alertas...

  // para validad el Rut....

  valRut(a:string){// 11.111.111-1 agregra el rut que se quiere validar como parametro  ej: obj:string
    var rut = a; //se reemplazará por la variable objeto que se reciba desde el formulario

    //obteber el digito verificador...
    this.dv = rut.slice(rut.length-1,rut.length);
    
    //Limpiar el rut y dejar sólo los números...
    //this.rut = this.rut.slice(0,this.rut.length-1).replace(/\D/g,'');
    rut = rut.slice(0,rut.length-1).replace(/\D/g,'');
    this.esValido= this.validar(rut);
    this.ensamblarRut(rut);
  }

  //la siguiente función separa el rut en un array de números y los multiplica por un factor que va de 2 a 7 y luego los suma
  validar(rut:string){
    var rut = rut;
    let numerosArray = rut.split('').reverse();
    
    let suma = 0;
    let multiplo = 2;
    let dv:any;
    for (let numero of numerosArray){
      suma += parseInt(numero) * multiplo;
      multiplo++;
      if (multiplo == 8){
        multiplo = 2;
      }
    }
    
    dv = 11 - (suma % 11);
    if (dv == 11){
      dv = '0';
    }else if (dv == 10){
      dv = 'k'.toUpperCase();
    }
    return dv == this.dv.toUpperCase();
         
  }
  ensamblarRut(r:string){
    var rut = r;
    if(!this.esValido){
      this.presentAlert();
      console.log("rut no valido")
      return this.xrut = '';
    }else {
      //this.presentAlert2();
      console.log("rut valido")
      this.xrut = rut.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".") + '-' + this.dv;
      return this.xrut; //devuelve el rut formateado
    }
   
  }


}
