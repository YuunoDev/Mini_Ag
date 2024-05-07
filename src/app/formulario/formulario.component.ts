import { Component } from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule],
  templateUrl: './formulario.component.html',
  providers: [provideNativeDateAdapter()],
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  minDate: Date;
  maxDate: Date;

  constructor() {
    // Set the minimum to January 1st 20 years in the past and December 31st a year in the future.
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const currentDay = new Date().getDate();
    this.minDate = new Date(currentYear, currentMonth, currentDay);
    this.maxDate = new Date(currentYear + 1, 11, 31);
  }
}
