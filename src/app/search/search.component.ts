import { Component } from '@angular/core';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { Car } from '../car';
import { CarsService } from '../cars.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  marca: string = '';
  indice: number = 0;

  micarro: Car = {
    id: 0,
    img: '',
    name: '',
    year: 0,
    description: '',
    pricerent: 0,
    isRented: false,
    brand: ''
  };

  constructor(private activatedRoute: ActivatedRoute, private carService: CarsService, private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.marca = params['brand'];
      this.indice = this.carService.getCarIndex(this.marca);
      console.log(this.indice);

      if (this.indice !== -1) {
        this.router.navigate(['/cars', this.indice]);
      }
    });

  }
}
