import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 

@Component({
  selector: 'app-reporte-datos',
  standalone: true,
  imports: [],
  templateUrl: './reporte-datos.component.html',
  styleUrl: './reporte-datos.component.css'
})
export class ReporteDatosComponent {
  datos!: Datos[];
  constructor(private datosService: DatosService) {}

  ngOnInit() {
    this.datos = this.datosService.getDatos();
  }
}
