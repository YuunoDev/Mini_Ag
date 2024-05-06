import { Component } from '@angular/core';
import { CarsService } from '../cars.service';
import { DomseguroPipe } from '../domseguro.pipe';
import { RouterOutlet } from '@angular/router';
import { Car } from '../car';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DomseguroPipe, RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ourCars: Car[]= [];
  video: string= '';
  constructor(private carsService: CarsService) { }

  ngOnInit() {
    this.ourCars = this.carsService.getCars();
    this.video = 'HRMShnf1Ics';
  }
  
}
