import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../datos.service';
import { Datos,Dias } from '../datos.model';


@Component({
  selector: 'app-alta-datos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './alta-datos.component.html',
  styleUrl: './alta-datos.component.css'
})
export class AltaDatosComponent {
  dato!: Datos;
  dias!: Dias[];

  constructor(private datosService: DatosService){}

  ngOnInit(){
    this.dato = this.datosService.nuevoCliente();
    this.dias = this.datosService.getDias();
  }
  nuevoCliente():void{
    this.datosService.agregarDatos(this.dato);
    this.dato = this.datosService.nuevoCliente();
  }
}
