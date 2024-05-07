import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 

@Component({
  selector: 'app-reporte-citas-proximas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-citas-proximas.component.html',
  styleUrl: './reporte-citas-proximas.component.css'
})
export class ReporteCitasProximasComponent {
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
