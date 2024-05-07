import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';
import { AltaDatosComponent } from '../datos/alta-datos/alta-datos.component';
import { ReporteDatosComponent } from '../datos/reporte-datos/reporte-datos.component';
import { ReporteCitasPreviasComponent } from '../datos/reporte-citas-previas/reporte-citas-previas.component';
import { ReporteCitasProximasComponent } from '../datos/reporte-citas-proximas/reporte-citas-proximas.component';

@Component({
  selector: 'app-uncar',
  standalone: true,
  imports: [RouterModule, AltaDatosComponent,ReporteDatosComponent,ReporteCitasPreviasComponent,ReporteCitasProximasComponent],
  templateUrl: './uncar.component.html',
  styleUrl: './uncar.component.css'
})
export class UncarComponent {
  @Input() car!: Car;
  
  msg:string="";


  procesaPropagar(mensaje:string){
    this.msg=mensaje;
  }

  constructor(
    public activateRoute: ActivatedRoute,
    public carsService: CarsService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.car = this.carsService.getCar(params['id']);
    });
  }
}
