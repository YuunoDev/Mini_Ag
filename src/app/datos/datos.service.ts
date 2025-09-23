import { Injectable } from '@angular/core';
import { Datos,Dias  } from './datos.model';
import { DIAS } from '../dias';
import { Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  datos!: Datos[];
  dias: Dias[] = DIAS;

  constructor() {
    this.datos=JSON.parse(localStorage.getItem("data") || '[]');
   }

   getDias(){
    return this.dias;
   }

   getDatos(){
    return this.datos;
   }

   agregarDatos(dato: Datos){
    this.datos.push(dato);
    localStorage.setItem('data',JSON.stringify(this.datos));
   }

   nuevoCliente(): Datos{
    return {
      id: this.datos.length,
      fecha:'',
      hora: '',
      nombre: '',
      telefono: '',
      correo: '',
      precio: this.datos.length,
      modelo: '',
      marca: '',
      anio:this.datos.length,
      dias: '',
      date: new Timestamp(0,0)
    };
   }
}
