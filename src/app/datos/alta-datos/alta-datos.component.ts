import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DatosService } from '../datos.service';
import { Datos,Dias } from '../datos.model';
import { Output, EventEmitter } from '@angular/core';


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
  nombre:string="";
  mensaje:string="";

  @Output() propagar = new EventEmitter<string>();

  onPropagar() {
    this.mensaje = "Cita agendada a nombre de " + this.nombre;  
    this.propagar.emit(this.mensaje);
  }

  constructor(private datosService: DatosService){}

  ngOnInit(){
    this.dato = this.datosService.nuevoCliente();
    this.dias = this.datosService.getDias();
  }
  nuevoCliente():void{
    this.datosService.agregarDatos(this.dato);
    this.nombre = this.dato.nombre;
    this.dato = this.datosService.nuevoCliente();
    this.onPropagar();
  }
}
