import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Platform } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  private db: SQLiteObject;
  private isOpen: boolean;  
  
  constructor(
    private sqlite: SQLite,
    private platform: Platform,
    
    
  ) {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'lapileria.db',
        location: 'default'}).then((db: SQLiteObject) => {
          this.db = db; 
          this.isOpen = true;
            this.crearTproductos();            
            this.crearTclientes();
            this.crearTdirecciones(); 
            this.crearTcompra();
            this.crearTmediopago();
            console.log('Base de datos creada');      
        });
    });   
    
    }
    getDBstate(){
      return this.isOpen;
    }

  //Tabla productos  
    crearTproductos(){
      this.db.executeSql('CREATE TABLE productos(id_producto INTEGER PRIMARY KEY AUTOINCREMENT, sku TEXT, nombre_producto TEXT, marca TEXT, nom_proveedor TEXT, descripcion TEXT, precio INTEGER, imagen TEXT, cantidad INTEGER)', [])
      .then(() => console.log('Executed SQL productos'))
      .catch(e => console.log('Error => ',e));
    }
    insertarProducto(sku, nombre_producto, marca, nom_proveedor,descripcion, precio, imagen, cantidad){
      let data = [sku, nombre_producto, marca, nom_proveedor,descripcion, precio, imagen, cantidad];
      return this.db.executeSql('INSERT INTO productos (sku, nombre_producto, marca, nom_proveedor,descripcion, precio, imagen, cantidad) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }
    obtenerProductos(){
      return this.db.executeSql('SELECT * FROM productos', [])
      .then(res => {
        let productos = [];
        for (let index = 0; index < res.rows.length; index++) {
          productos.push(res.rows.item(index));
        }
        return productos;
      })
      .catch(e => console.log(e));
    }
    obtenerProducto(id){
      return this.db.executeSql('SELECT * FROM productos WHERE id = ?', [id])
      .then(res => {
        return res.rows.item(0);
      })
      .catch(e => console.log(e));
    }

    actualizarProducto(id_producto , sku, nombre_producto, marca, nom_proveedor,descripcion, precio, imagen, cantidad){
      let data = [sku, nombre_producto, marca, nom_proveedor,descripcion, precio, imagen, cantidad, id_producto];
      return this.db.executeSql('UPDATE productos SET sku = ?, nombre_producto = ?, marca = ?, nom_proveedor = ?, descripcion = ?, precio = ?, imagen = ?, cantidad = ? WHERE id = ?', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

    eliminarProducto(id){
      return this.db.executeSql('DELETE FROM productos WHERE id = ?', [id])
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }


  //Tabla direcciones
    crearTdirecciones(){
      this.db.executeSql('CREATE TABLE direcciones(id INTEGER PRIMARY KEY AUTOINCREMENT, direccion TEXT, comuna TEXT, rut TEXT)', [])
      .then(() => console.log('Executed SQL direcciones'))
      .catch(e => console.log('Error => ',e));
    }
    insertarDireccion(direccion, comuna, rut){
      let data = [direccion, comuna, rut];
      return this.db.executeSql('INSERT INTO direcciones (direccion, comuna, rut) VALUES (?, ?, ?)', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }
    obtenerDirecciones(){
      return this.db.executeSql('SELECT * FROM direcciones', [])
      .then(res => {
        let direcciones = [];
        for (let index = 0; index < res.rows.length; index++) {
          direcciones.push(res.rows.item(index));
        }
        return direcciones;
      })
      .catch(e => console.log(e));
    }
    obtenerDireccion(id){
      return this.db.executeSql('SELECT * FROM direcciones WHERE id = ?', [id])
      .then(res => {
        return res.rows.item(0);
      })
      .catch(e => console.log(e));
    }

    actualizarDireccion(id, direccion, comuna, rut){
      let data = [direccion, comuna, rut, id];
      return this.db.executeSql('UPDATE direcciones SET direccion = ?, comuna = ?, rut = ? WHERE id = ?', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

    eliminarDireccion(id){
      return this.db.executeSql('DELETE FROM direcciones WHERE id = ?', [id])
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

//TABLA CLIENTES

    crearTclientes(){
      this.db.executeSql('CREATE TABLE IF NOT EXISTS clientes (id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, password TEXT, rut TEXT, tarjeta TEXT, direccion TEXT, comuna TEXT)', [])
      .then(() => console.log('Executed SQL clientes'))
      .catch(e => console.log('Error => ',e));
    }
    insertarCliente(nombre, password, rut, tarjeta, direccion, comuna){
      let data = [nombre, password, rut, tarjeta, direccion, comuna];
      return this.db.executeSql('INSERT INTO clientes (nombre, password, rut, tarjeta, direccion, comuna) VALUES (?, ?, ?, ?, ?, ?)', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }
    obtenerClientes(){
      return this.db.executeSql('SELECT * FROM clientes', [])
      .then(res => {
        let clientes = [];
        for (let index = 0; index < res.rows.length; index++) {
          clientes.push(res.rows.item(index));
        }
        return clientes;
      })
      .catch(e => console.log(e));
    }
    obtenerCliente(id){
      return this.db.executeSql('SELECT * FROM clientes WHERE id = ?', [id])
      .then(res => {
        return res.rows.item(0);
      })
      .catch(e => console.log(e));
    }

    actualizarCliente(id, nombre, password, rut, tarjeta, direccion, comuna){
      let data = [nombre, password, rut, tarjeta, direccion, comuna, id];
      return this.db.executeSql('UPDATE clientes SET nombre = ?, password = ?, rut = ?, tarjeta = ?, direccion = ?, comuna = ? WHERE id = ?', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

    eliminarCliente(id){
      return this.db.executeSql('DELETE FROM clientes WHERE id = ?', [id])
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }


//TABLA Compra
    crearTcompra(){
      this.db.executeSql('CREATE TABLE compra(orden INTEGER PRIMARY KEY AUTOINCREMENT, rut TEXT, banco TEXT, comercio TEXT, cuotas INTEGER, medio TEXT, total INTEGER, tarjeta TEXT, recibe TEXT, fono TEXT, fecha DATE)', [])
      .then(() => console.log('Executed SQL compra'))
      .catch(e => console.log('Error => ',e));
    }
    insertarCompra(rut, banco, comercio, cuotas, medio, total, tarjeta, recibe, fono, fecha){
      let data = [rut, banco, comercio, cuotas, medio, total, tarjeta, recibe, fono, fecha];
      return this.db.executeSql('INSERT INTO compra (rut, banco, comercio, cuotas, medio, total, tarjeta, recibe, fono, fecha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }
    obtenerCompras(){
      return this.db.executeSql('SELECT * FROM compra', [])
      .then(res => {
        let compras = [];
        for (let index = 0; index < res.rows.length; index++) {
          compras.push(res.rows.item(index));
        }
        return compras;
      })
      .catch(e => console.log(e));
    }
    obtenerCompra(id){
      return this.db.executeSql('SELECT * FROM compra WHERE id = ?', [id])
      .then(res => {
        return res.rows.item(0);
      })
      .catch(e => console.log(e));
    }

    actualizarCompra(id, rut, banco, comercio, cuotas, medio, total, tarjeta, recibe, fono, fecha){
      let data = [rut, banco, comercio, cuotas, medio, total, tarjeta, recibe, fono, fecha, id];
      return this.db.executeSql('UPDATE compra SET rut = ?, banco = ?, comercio = ?, cuotas = ?, medio = ?, total = ?, tarjeta = ?, recibe = ?, fono = ?, fecha = ? WHERE id = ?', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

    eliminarCompra(id){
      return this.db.executeSql('DELETE FROM compra WHERE id = ?', [id])
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

//Tabla Medios de pago
    crearTmediopago(){
      this.db.executeSql('CREATE TABLE medios_pago (id INTEGER PRIMARY KEY AUTOINCREMENT, tarjeta TEXT, banco TEXT, medio TEXT, rut TEXT)', [])
      .then(() => console.log('Executed SQL medios'))
      .catch(e => console.log('Error => ',e));
    }
    insertarMedio(tarjeta, banco, medio, rut){
      let data = [tarjeta, banco, medio, rut];
      return this.db.executeSql('INSERT INTO medios_pago (tarjeta, banco, medio, rut) VALUES (?, ?, ?, ?)', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }
    obtenerMedios(){
      return this.db.executeSql('SELECT * FROM medios_pago', [])
      .then(res => {
        let medios = [];
        for (let index = 0; index < res.rows.length; index++) {
          medios.push(res.rows.item(index));
        }
        return medios;
      })
      .catch(e => console.log(e));
    }
    obtenerMedio(id){
      return this.db.executeSql('SELECT * FROM medios_pago WHERE id = ?', [id])
      .then(res => {
        return res.rows.item(0);
      })
      .catch(e => console.log(e));
    }

    actualizarMedio(id, tarjeta, banco, medio, rut){
      let data = [tarjeta, banco, medio, rut, id];
      return this.db.executeSql('UPDATE medios_pago SET tarjeta = ?, banco = ?, medio = ?, rut = ? WHERE id = ?', data)
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }

    eliminarMedio(id){
      return this.db.executeSql('DELETE FROM medios_pago WHERE id = ?', [id])
      .then(res => {
        console.log(res);
      })
      .catch(e => console.log(e));
    }


    cerrarBD(){
      if(this.isOpen){
        this.db.close()
        .then(() => {
          this.isOpen = false;
          console.log('BD cerrada');
        })
        .catch(e => console.log(e));
      }
    }


   }
  



