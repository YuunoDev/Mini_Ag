import { Component } from '@angular/core';
import { Datos } from '../datos.model';
import { DatosService } from '../datos.service'; 
import { CommonModule, DatePipe } from '@angular/common';
import { UserService } from '../../user.service';
import { timestamp } from 'rxjs';
import { Timestamp } from '@angular/fire/firestore';


@Component({
  selector: 'app-reporte-citas-previas',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './reporte-citas-previas.component.html',
  styleUrl: './reporte-citas-previas.component.css'
})
export class ReporteCitasPreviasComponent {
  datos!: Datos[];
  hoydate= new Date();
  hoy = Timestamp.fromDate(this.hoydate);
  constructor(private datosService: DatosService, private userService: UserService) {
  }

  ngOnInit() {
    console.log(this.hoy)
    this.userService.getCitas().subscribe(datos => {
      this.datos = datos;
    })
  }
}
