import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarslComponent } from './carsl/carsl.component';
import { UncarComponent } from './uncar/uncar.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'cars', component: CarslComponent},
    { path: 'cars/:id', component: UncarComponent},
    { path: '**', pathMatch: 'full' ,redirectTo: 'home' }

];
