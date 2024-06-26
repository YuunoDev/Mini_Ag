import { Component, OnInit } from '@angular/core';
import { CarsService } from '../cars.service';
import { DomseguroPipe } from '../domseguro.pipe';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Car } from '../car';
import { LayoutmanComponent } from '../layoutman/layoutman.component';
import { AfterViewInit, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DomseguroPipe, RouterOutlet, LayoutmanComponent, RouterModule ,FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
  
export class HomeComponent implements AfterViewInit, OnInit{
  ourCars: Car[]= [];
  video: string= '';
  private readonly MIN_FONT_SIZE: number = 14; // tamaño de fuente mínimo
  private readonly MAX_FONT_SIZE: number = 36; // tamaño de fuente máximo
  private readonly MAX_WORD_SPACING: number = 20; // espaciado máximo entre palabras
  private synth = window.speechSynthesis;
  private utterance: SpeechSynthesisUtterance;
  fontSize: number = 18; // tamaño de fuente inicial
  wordSpacing: number = 0; // espaciado inicial



  constructor(private carsService: CarsService,private renderer: Renderer2, private el: ElementRef) {
    this.utterance = new SpeechSynthesisUtterance('');
   }

  ngOnInit() {
    this.ourCars = this.carsService.getCars();
    this.video = 'HRMShnf1Ics';
  }
  
  ngAfterViewInit(): void {
    this.texto.nativeElement.style.wordSpacing = `${this.wordSpacing}px`;
  }

  

  @ViewChild('texto', { static: false }) texto!: ElementRef;  
  aux?:number;
  isSubmenuVisible: boolean = false;

  toggleSubmenu() {
    this.isSubmenuVisible = !this.isSubmenuVisible;
  }
  
  

  speak(): void {
    // Obtiene todo el texto del documento
    let texto = document.body.innerText;

    // Crea una nueva instancia de SpeechSynthesisUtterance con el texto completo
    this.utterance = new SpeechSynthesisUtterance(texto);

    // Configuración adicional (opcional)
    this.utterance.rate = 1; // Velocidad (por defecto es 1)
    this.utterance.pitch = 1; // Tono (por defecto es 1)
    this.utterance.volume = 1; // Volumen (por defecto es 1)

    // Selecciona una voz específica (opcional)
    const voices = this.synth.getVoices();
    if (voices.length > 0) {
      this.utterance.voice = voices[0]; // Selecciona la primera voz disponible
    }

    // Inicia la síntesis de voz
    this.synth.speak(this.utterance);
  }

  stopSpeak(): void {
    // Cancela cualquier síntesis de voz en progreso
    if (this.synth.speaking) {
      this.synth.cancel();
    }
  }


  decreaseFontSize() {
    if (this.fontSize > this.MIN_FONT_SIZE) {
      this.fontSize -= 2;
      this.applyStyleToAllElements('fontSize', `${this.fontSize}px`);
    }
  }

  increaseFontSize() {
    if (this.fontSize < this.MAX_FONT_SIZE) {
      this.fontSize += 2;
      this.applyStyleToAllElements('fontSize', `${this.fontSize}px`);
    }
  }

  increaseWordSpacing() {
    if (this.wordSpacing < this.MAX_WORD_SPACING) {
      this.wordSpacing += 2;
      this.applyStyleToAllElements('wordSpacing', `${this.wordSpacing}px`);
    }
  }

  private applyStyleToAllElements(styleProperty: string, value: string) {
    const elements = document.querySelectorAll('*');
    elements.forEach((element) => {
      this.renderer.setStyle(element, styleProperty, value);
    });
  }

  lineFocusEnabled = false;
  lineY = 0;

  toggleLineFocus() {
    this.lineFocusEnabled = !this.lineFocusEnabled;
    if (this.lineFocusEnabled) {
      document.addEventListener('mousemove', this.highlightLine.bind(this));
    } else {
      document.removeEventListener('mousemove', this.highlightLine.bind(this));
      this.removeLineHighlight();
    }
  }

  highlightLine(event: MouseEvent) {
    this.lineY = event.clientY;
  }

  removeLineHighlight() {
    this.lineY = 0;
  }
}
