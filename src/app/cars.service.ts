import { Injectable } from '@angular/core';
import { Car } from './car';
import { OurCars } from './ourCars';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = OurCars;
  constructor() { }

  getCars(): Car[] {
    return this.cars;
  }

  getCar(id: number): Car {
    return this.cars[id];
  }

  searchCars(search: string): Car[] {
    return this.cars.filter(car => car.name.toLowerCase().includes(search.toLowerCase()));
  }

}
