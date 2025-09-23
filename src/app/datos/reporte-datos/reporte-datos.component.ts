import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reporte-datos',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './reporte-datos.component.html',
  styleUrl: './reporte-datos.component.css'
})
export class ReporteDatosComponent {
  datos!: Datos[];
  constructor(private datosService: DatosService, private userService:UserService) {}

  ngOnInit() {
    // this.datos = this.datosService.getDatos();
    this.userService.getCitas().subscribe(datos => {
      this.datos = datos;
    })
  }
}
