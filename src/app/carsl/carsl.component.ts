import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarsService } from '../cars.service';
import { Car } from '../car';

@Component({
  selector: 'app-carsl',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carsl.component.html',
  styleUrl: './carsl.component.css'
})
export class CarslComponent {
  ourCars: Car[]= [];
  constructor(private carsService: CarsService) {
    console.log('CarslComponent constructor');
  }

  ngOnInit() {
    console.log('CarslComponent ngOnInit');
    this.ourCars = this.carsService.getCars();
    console.log(this.ourCars);
  }
}
