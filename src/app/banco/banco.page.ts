import { element } from 'protractor';
import { ApiBancosService } from '../servicios/api-bancos.service';
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Observable } from 'rxjs';
import { ValidaRutService } from '../servicios/valida-rut.service';


@Component({
  selector: 'app-banco',
  templateUrl: './banco.page.html',
  styleUrls: ['./banco.page.scss'],
})
export class BancoPage implements OnInit {
  
  cliente = JSON.parse(localStorage.getItem('cliente'));
  monto = localStorage.getItem('total');
  medio : any = [];
  comercio = "Tienda de papelería Lapilería";
  ordenCompra = "123456789";
  rut:string = this.cliente.rut;
  
  ncard:any;
  cuotas: any;
  banco:any;
  bancos:any;
  bankSelected:any;
  constructor(
    private api: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    public storage: Storage,
    public apiBancos: ApiBancosService,
    public validaRut: ValidaRutService
        
  ) {
    this.medio = JSON.parse(localStorage.getItem('medio'));
    

  }
  ngOnInit() {
    this.getBanks();
    this.validaRut.valRut(this.rut);        
    if(this.medio.nombre == "debito"){
      this.cuotas = null;
    }
}
  

  setBanco(){
    console.log("banco", this.bankSelected);
    this.banco = this.bankSelected.banco;
    this.ncard = this.bankSelected.tarjeta;
    this.setNcard(this.ncard);
    return this.banco;
  }

  setNcard(param:any){
    this.ncard = param;
    console.log("N° tarjeta:",this.ncard);
    return this.ncard;
  }

  setCuotas(){
    
    console.log("Cuotas",this.cuotas);
    return this.cuotas;
  }

  pay(){
    //Aquí te entrega el recibo
    const objCompra = {
      rut: this.validaRut.xrut,
      monto: this.monto,
      medio: this.medio.nombre,
      comercio: this.comercio,
      ordenCompra: this.ordenCompra,
      banco: this.banco,
      ncard: this.ncard,
      cuotas: this.cuotas
    }
    const medioPago ={
      id: 1,
      tarjeta: this.ncard,
      banco: this.banco,
      medio: this.medio.nombre,
      rut: this.validaRut.xrut      
    }
    localStorage.setItem('medioPago', JSON.stringify(medioPago));
    this.apiBancos.postPago(objCompra);
    
        console.log("DatosCompra:", objCompra);
        this.router.navigate(['/recibo']);
          
  }  

  getBanks(){
    this.apiBancos.getBancos().subscribe(
      response =>{
        console.log("respuesta:", response);
        this.bancos = response; 
      },
      error =>{
        console.log(error);
      }
    )
  }


}
