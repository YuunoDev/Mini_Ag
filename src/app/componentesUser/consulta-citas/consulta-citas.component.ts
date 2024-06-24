import { Component } from '@angular/core';
import { Datos } from '../../datos/datos.model';
import { DatosService } from '../../datos/datos.service';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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

  constructor(private datosService: DatosService, private userService:UserService, private router: Router) {
    const nombre = localStorage.getItem('userId');
    this.cuenta = nombre;
  }

  ngOnInit() {
    // this.datos = this.datosService.getDatos();
    if (!localStorage.getItem('userId')) {
      this.router.navigate(['/home'])
    }else{
      this.userService.getCitas().subscribe(datos => {
        this.datos = datos;
      })
    }
    }
    

  borrar(dato: Datos){
    this.userService.deleteCita(dato);
  }
}
