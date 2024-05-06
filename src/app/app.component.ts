import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AltaDatosComponent } from './datos/alta-datos/alta-datos.component';
import { ReporteDatosComponent } from './datos/reporte-datos/reporte-datos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent,AltaDatosComponent,ReporteDatosComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DriverRent';
}
