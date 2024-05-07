import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-reporte-citas-previas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-citas-previas.component.html',
  styleUrl: './reporte-citas-previas.component.css'
})
export class ReporteCitasPreviasComponent {
  datos!: Datos[];
  hoy: Date;
  constructor(private datosService: DatosService) {
    this.hoy = new Date();
  }

  ngOnInit() {
    this.datos = this.datosService.getDatos();
    this.datos.forEach(item => {
      item.date=new Date(item.fecha);
    })
  }
}
