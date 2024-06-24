import { Component } from '@angular/core';
import { ReporteCitasPreviasComponent } from '../../datos/reporte-citas-previas/reporte-citas-previas.component';
import { ReporteCitasProximasComponent } from '../../datos/reporte-citas-proximas/reporte-citas-proximas.component';
import { ReporteUsuariosComponent } from '../../datos/reporte-usuarios/reporte-usuarios.component';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReporteCitasPreviasComponent, ReporteCitasProximasComponent, ReporteUsuariosComponent,CommonModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  pagina?: string;

  onPrevias(){
    this.pagina = 'previas';
    console.log(this.pagina)
    
  }

  onProximas(){
    this.pagina = 'proximas';
    console.log(this.pagina)
    
  }

  onUsuarios(){
    this.pagina = 'usuarios';
    console.log(this.pagina)
    
  }

  onEstadisticas(){
    this.pagina = 'estadisticas';
    console.log(this.pagina)
    
  }
}
