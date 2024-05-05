import { Component } from '@angular/core';
import { CarsService } from '../cars.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private carsService: CarsService) { }

}
