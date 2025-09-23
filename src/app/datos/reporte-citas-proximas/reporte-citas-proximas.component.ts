import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 
import { Timestamp } from '@angular/fire/firestore';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-reporte-citas-proximas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reporte-citas-proximas.component.html',
  styleUrl: './reporte-citas-proximas.component.css'
})
export class ReporteCitasProximasComponent {
  datos!: Datos[];
  hoydate= new Date();
  hoy = Timestamp.fromDate(this.hoydate);
  constructor(private datosService: DatosService, private userService: UserService) {
  }

  ngOnInit() {
    this.userService.getCitas().subscribe(datos => {
      this.datos = datos;
    })
  }
}
