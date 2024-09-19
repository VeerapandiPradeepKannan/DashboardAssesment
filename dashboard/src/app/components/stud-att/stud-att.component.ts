import { Component, ViewChild } from '@angular/core';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexYAxis,
  ApexFill,
  ApexGrid,
  ApexLegend,
  ApexStates,
  ApexTooltip,
  ApexPlotOptions,ApexMarkers
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid:ApexGrid;
  states:ApexStates;
  legend:ApexLegend;
  tooltip:ApexTooltip;
  markers: ApexMarkers;
};
@Component({
  selector: 'app-stud-att',
  // standalone: true,
  // imports: [NgApexchartsModule],
  templateUrl: './stud-att.component.html',
  styleUrls: ['./stud-att.component.css'],
})
export class StudAttComponent {

  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;

  constructor() { 
  this.chartOptions = {
    series: [
      {
        name: "attendance",
        data: [10, 41, 35, 51, 49, 62, 69, 91]
      }
    ],
    chart: {
      height: 210,
      type: "line", 
      zoom: {
        enabled: false
      },
      toolbar: {
        show: false // Ensure toolbar is hidden
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight"
    },
    
    title: {
      text: "attendance by Week",
      align: "left"
    },
    markers: {
      size: 6,
      hover:{
        size:7
      }
    
    },
    grid: {
      row: {
        colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
        opacity: 0.5
      }
    },
    xaxis: {
      categories: [
        "1/7",
        "8/7",
        "15/7",
        "22/7",
        "29/7",
        "5/8",
        "12/8",
        "19/8",
        "26/8"
      ],
      
        title: {
          text: "Weeks"
        }
      },
    
    yaxis: [
      {
        title: {
          text: "Attendance"
        }
      },]
  };
  }

}
