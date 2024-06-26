import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarslComponent } from './carsl/carsl.component';
import { UncarComponent } from './uncar/uncar.component';
import { SearchComponent } from './search/search.component';
import { UsComponent } from './us/us.component';
import { AltaDatosComponent } from './datos/alta-datos/alta-datos.component';
import { ReporteCitasPreviasComponent } from './datos/reporte-citas-previas/reporte-citas-previas.component';
import { ReporteCitasProximasComponent } from './datos/reporte-citas-proximas/reporte-citas-proximas.component';
import { LayoutmanComponent } from './layoutman/layoutman.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cars', component: CarslComponent},
    { path: 'cars/:id', component: UncarComponent},
    { path: 'buscar', component: SearchComponent },
    { path: 'nosotros', component: UsComponent },
    { path: 'marcas', component: LayoutmanComponent },
    { path: 'formulario', component: AltaDatosComponent},
    { path: 'citasPrevias', component: ReporteCitasPreviasComponent},
    { path: 'citasProximas', component: ReporteCitasProximasComponent},
    { path: '**', pathMatch: 'full' ,redirectTo: 'home' }

];
