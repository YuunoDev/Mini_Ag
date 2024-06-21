import { Component } from '@angular/core';
import { Datos } from '../../datos/datos.model';
import { DatosService } from '../../datos/datos.service';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-consulta-citas',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './consulta-citas.component.html',
  styleUrl: './consulta-citas.component.css'
})
export class ConsultaCitasComponent {
  datos!: Datos[];
  cuenta:any;

  constructor(private datosService: DatosService, private userService:UserService) {
    const nombre = localStorage.getItem('userId');
    this.cuenta = nombre;
  }

  ngOnInit() {
    // this.datos = this.datosService.getDatos();
    this.userService.getCitas().subscribe(datos => {
      this.datos = datos;
    })
  }
}
