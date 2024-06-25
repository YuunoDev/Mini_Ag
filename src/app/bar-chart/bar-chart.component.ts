import { Component, OnInit } from '@angular/core';
import Chart, { ChartType } from 'chart.js/auto';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnInit {

  // Atributo que almacena los datos del chart
  public chart: Chart;
  public tableData: { consola: string, value: number }[] = [];

  ngOnInit(): void {
    this.generateRandomData();
  }

  generateRandomData(): void {
    const labels = ['Xbox', 'Playstation', 'Switch', 'Arcades', 'PC', 'Laptops', 'NES'];
    const data = labels.map(() => Math.floor(Math.random() * 250000));
    this.tableData = labels.map((consola, index) => ({ consola, value: data[index] }));

    const chartData = {
      labels: labels,
      datasets: [{
        label: 'Datos Aleatorios',
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
              text: 'Gráfica de Barras - Tiempo de conexion de jugadores'
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: 'Consolas'
              }
            },
            y: {
              title: {
                display: true,
                text: 'Jugadores conectados'
              }
            }
          }
        }
      });
    }
  }
}
