import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';
import { AltaDatosComponent } from '../datos/alta-datos/alta-datos.component';
import { ReporteDatosComponent } from '../datos/reporte-datos/reporte-datos.component';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-uncar',
  standalone: true,
  imports: [RouterModule, AltaDatosComponent,ReporteDatosComponent, CommonModule],
  templateUrl: './uncar.component.html',
  styleUrl: './uncar.component.css'
})
export class UncarComponent {
  @Input() car!: Car;
  
  num:number=0;
  loggedIn:boolean = this.userService.isLoggedIn();

  procesaPropagar(mensaje:number){
    this.num=mensaje;
  }

  constructor(
    public activateRoute: ActivatedRoute,
    public carsService: CarsService,
    private userService: UserService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.car = this.carsService.getCar(params['id']);
    });
  }
}
