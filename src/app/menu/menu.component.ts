import { Component } from '@angular/core';
import { Router, RouterModule,RouterOutlet } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [ RouterModule, RouterOutlet, HomeComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) { }

  buscarMarca(marca: string) {
    this.router.navigate(
      ['/buscar'],
      { queryParams: { brand: marca } }
    );
  }
}
