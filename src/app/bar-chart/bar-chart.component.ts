import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';
import { Datos } from '../datos/datos.model';
import { UserService } from '../user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  standalone: true
})
export class BarChartComponent implements OnInit {


  bmw?: any;
  audi?: any;
  mercedes?: any;
  toyota?: any;
  ford?: any;
  chevrolet?: any;
  nissan?: any;
  hyundai?: any;
  honda?: any;
  kia?: any;

  // Atributo que almacena los datos del chart
  public chart?: Chart;
  public tableData: { consola: string, value: number }[] = [];

  constructor(private userService: UserService){}

  async ngOnInit(){
    this.bmw = await this.userService.contarCitas('BMW');
    this.audi = await this.userService.contarCitas('Audi');
    this.mercedes = await this.userService.contarCitas('Mercedes');
    this.toyota = await this.userService.contarCitas('Toyota');
    this.ford = await this.userService.contarCitas('Ford');
    this.chevrolet = await this.userService.contarCitas('Chevrolet');
    this.nissan = await this.userService.contarCitas('Nissan');
    this.hyundai = await this.userService.contarCitas('Hyundai');
    this.honda = await this.userService.contarCitas('Honda');
    this.kia = await this.userService.contarCitas('Kia');
    this.generateChart();
  }


  generateChart(): void {
    const labels = ['BMW', 'Audi', 'Mercedes', 'Toyota', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai', 'Honda', 'Kia'];
    let data = [this.bmw.citas, this.audi.citas, this.mercedes.citas, this.toyota.citas, 
        this.ford.citas, this.chevrolet.citas, this.nissan.citas, this.hyundai.citas, this.honda.citas, this.kia.citas]

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Citas',
        data: data,
        backgroundColor: [
          'rgba(14 122 13)',
          'rgba(7 57 128)',
          'rgba(254 0 22)',
          'rgba(243 238 231)',
          'rgba(192 192 192)',
          'rgba(236 226 198)',
          'rgba(127 127 127)'
        ],
        borderColor: [
          'rgb(14 122 13)',
          'rgb(7 57 128)',
          'rgb(254 0 22)',
          'rgb(243 238 231)',
          'rgb(192 192 192)',
          'rgb(236 226 198)',
          'rgb(127 127 127)'
        ],
        borderWidth: 1
      }]
    };
    if (this.chart) {
      this.chart.data = chartData;
      this.chart.update();
    } else {
      this.chart = new Chart("chart", {
        type: 'bar' as ChartType,
        data: chartData,
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Gráfica de Barras - Citas Por Auto'
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Auto'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Citas'
              }
            }
          }
        }
      });
    }
  }
}
