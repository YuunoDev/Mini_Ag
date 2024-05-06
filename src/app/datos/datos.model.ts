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
//   imagen: File | undefined;
  dias: string;
}

export interface Dias{
    id: number;
    nombre: string;
}