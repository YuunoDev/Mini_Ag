import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { QRCodeModule } from 'angularx-qrcode';

@Component({
  selector: 'app-qr-generator',
  standalone: true,
  imports: [QrGeneratorComponent, QRCodeModule, CommonModule],
  templateUrl: './qr-generator.component.html',
  styleUrl: './qr-generator.component.css'
})
export class QrGeneratorComponent {
  qrData: string = '';
  dataPool: Array<string> = [
    'https://edabit.com/',
    'https://www.codeavengers.com/',
    'https://www.sololearn.com/es/',
    'https://www.coursera.org/',
    'https://www.codecademy.com/',
    'https://code.org/',
    'https://dash.generalassemb.ly/',
    'https://www.codeconquest.com/',
    'https://www.theodinproject.com/',
    'https://www.w3schools.com/'
  ];

  generateRandomData() {
    const randomIndex = Math.floor(Math.random() * this.dataPool.length);
    this.qrData = this.dataPool[randomIndex];
  }
}