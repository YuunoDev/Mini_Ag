import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';
import { AltaDatosComponent } from '../datos/alta-datos/alta-datos.component';
import { ReporteDatosComponent } from '../datos/reporte-datos/reporte-datos.component';

@Component({
  selector: 'app-uncar',
  standalone: true,
  imports: [RouterModule, AltaDatosComponent,ReporteDatosComponent],
  templateUrl: './uncar.component.html',
  styleUrl: './uncar.component.css'
})
export class UncarComponent {
  @Input() car!: Car;
  
  num:number=0;


  procesaPropagar(mensaje:number){
    this.num=mensaje;
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
