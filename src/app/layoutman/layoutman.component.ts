import { Component,ElementRef,OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-layoutman',
  standalone: true,
  imports: [],
  templateUrl: './layoutman.component.html',
  styleUrl: './layoutman.component.css'
})
export class LayoutmanComponent {
  title = 'layoutman';
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLElement>;

  ngOnInit() {
    this.setup();
  }

  constructor() {} 
  
  setup() {
    const numCols = 4;
    const colHeights = Array(numCols).fill(1);
    const container = this.container.nativeElement;

    Array.from(container.children).forEach((child: any, i: number) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    });
    container.style.height = Math.max(...colHeights) + "px";
  }
}
