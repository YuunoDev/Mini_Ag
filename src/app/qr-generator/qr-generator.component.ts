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
  qrData = localStorage.getItem('descuento');
}