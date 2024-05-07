import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-us',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './us.component.html',
  styleUrl: './us.component.css'
})
export class UsComponent {

  // Variable para controlar el modo oscuro
  isDarkMode: boolean = false;

  // Array de miembros del equipo
  teamMembers: any[] = [
    {
      name: 'Adrian Alonso Arambula',
      id: '322129',
      quote: 'Ayuda hijos de la...',
      image: '/assets/images/AAA.jpeg'
    },
    {
      name: 'José Luis Ornelas Valadez',
      id: '262545',
      quote: 'XD',
      image: '/assets/images/JLOV.jpeg'
    },
    {
      name: 'Juan Rodolfo Aranda Cisneros',
      id: '290589',
      quote: 'Me dicen el comal porque caliento a las gorditas 🥴🥴',
      image: '/assets/images/JR.jpeg'
    },
    {
      name: 'Andrés Heredia BallIn',
      id: '226961',
      quote: 'Murió como vivió, con una increíble adicción al fentanilo',
      image: '/assets/images/AHB.jpeg'
    }
  ];
}
