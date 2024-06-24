import { Timestamp } from "@angular/fire/firestore";

export interface Datos{
  id: number;
  fecha: string;
  hora: string;
  nombre: string;
  telefono: string;
  correo: string;
  precio: number;
  modelo: string;
  marca: string;
  anio: number;
  dias: string;
  date: Timestamp;
}

export interface Dias{
    id: number;
    nombre: string;
}