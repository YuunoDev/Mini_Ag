import { Component,Input } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'app-uncar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './uncar.component.html',
  styleUrl: './uncar.component.css'
})
export class UncarComponent {
  @Input() car!: Car;

  constructor(
    public activateRoute: ActivatedRoute,
    public carsService: CarsService
  ) {
    this.activateRoute.params.subscribe(params => {
      this.car = this.carsService.getCar(params['id']);
    });
  }
}
