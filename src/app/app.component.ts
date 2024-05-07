import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { AltaDatosComponent } from './datos/alta-datos/alta-datos.component';
import { ReporteDatosComponent } from './datos/reporte-datos/reporte-datos.component';
import { ReporteCitasPreviasComponent } from './datos/reporte-citas-previas/reporte-citas-previas.component';
import { ReporteCitasProximasComponent } from './datos/reporte-citas-proximas/reporte-citas-proximas.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuComponent, AltaDatosComponent,ReporteDatosComponent,ReporteCitasPreviasComponent,ReporteCitasProximasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DriverRent';
}
