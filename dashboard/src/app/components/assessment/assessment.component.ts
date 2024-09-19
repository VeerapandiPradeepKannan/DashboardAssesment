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
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  fill: ApexFill;
  grid: ApexGrid;
  states: ApexStates;
  legend: ApexLegend;
  tooltip: ApexTooltip;
};
@Component({
  selector: 'app-assessment',
  // standalone: true,
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.css'],
})
export class AssessmentComponent {
  @ViewChild("chart") chart: ChartComponent | any;
  public chartOptions: Partial<ChartOptions> | any;
  // dataArray: any[] = [
  //   { 2001: [44, 55, 41, 64, 22, 43, 21] },
  //   { 2002: [44, 55, 41, 64, 22, 43, 21] }
  // ];
  dataArray: any[] = [
    { Assessment: "Assignment", values: [44, 55, 41, 64, 22] },
    { Assessment: "Quiz", values: [44, 55] },
    { Assessment: "Presentation", values: [44, 55] },
    { Assessment: "Lab", values: [44, 55] },
    { Assessment: "Viva", values: [44, 55] }
  ];
  constructor() {
    const yearData: { [key: number]: number[] } = {};
    const xAxisCategories: { [key: number]: string[] } = {};

    this.dataArray.forEach(item => {
      if (!yearData[item.Assessment]) {
        yearData[item.Assessment] = item.values;
        xAxisCategories[item.Assessment] = item.Assessment;
      }
    });

    // Prepare series data
    const seriesData: ApexAxisChartSeries = Object.keys(yearData).map((Assessment: any) => ({
      name: `Assessment ${Assessment}`,
      data: yearData[Assessment]
    }));

    // Prepare x-axis categories
    const allCategories = Array.from(new Set(Object.values(xAxisCategories).flat()));
    const xaxisCategories = allCategories;










    this.chartOptions = {
      series: [{
        name: "Completed",
        backgroundColor: "#000000",
        data: [44, 55, 41, 64, 22]
      }, {
        name: "Completed",
        data: [53, 78, 80, 68, 60]
      },
      {
        name: "Completed",
        data: [65, 68, 60, 68, 60]
      },
      {
        name: "Pending",
        data: [100, 100],
      },
      {
        name: "Pending",
        data: [100],
        fill: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        },
        colors: ['#F44336', '#E91E63', '#9C27B0'],
        style: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        },
        markers: {
          colors: ['#F44336', '#E91E63', '#9C27B0']
        }
      },



        // {
        //         name: "serie1",
        //         data: seriesData,
        //         colors: {
        //           // barColors:['#fcba03'],
        //           backgroundBarColors: ['#7388A91A'],
        //           backgroundBarOpacity: 1,
        //       //     backgroundBarRadius: 0,
        //         },

        //     }
      ],


      // }


      // barThickness: 15,
      // data:arrVal
      // backgroundColor:bgcol
      colors: "#000000",


      tooltip: {
        enabled: false,
      },
      chart: {
        toolbar: {
          show: false,
        },
        type: "bar",
        height: 220,
        width: '100%',
        color: "#1543ce",
        foreColor: "#373d3f",
        stacked: false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15px',
          dataLabels: {
            position: 'top'
          },
          colors: {
            barColors: ['#fcba03'],
            backgroundBarColors: [],
            // backgroundBarOpacity: 1,
            //     backgroundBarRadius: 0,
          },
          // barHeight: '70%',
        }
      },

      dataLabels: {
        enabled: false,
        style: {
          colors: ['#333'],
        },
        formatter: function (val: string, opt: { w: { globals: { labels: { [x: string]: string; }; }; }; dataPointIndex: string | number; }) {
          return val + "%"
        },
        offsetY: -20
      },
      //     yaxis: {
      //       min: 100,
      //       max: 200,
      //       // tickAmount: 10,
      //       categories:[],
      //       // tickAmount: 10,
      //       // y: 30,
      //       yAxisIndex: 30,
      //       type: 'numeric',
      //   // 
      //   axisBorder: {
      //     show: true,
      //     color: '#CBCBCB',
      //     // offsetX: 0,
      //     // offsetY: 0
      // },
      //       // tickAmount: 10
      //     },
      yaxis: {
        show: true,
        showAlways: true,
        showForNullSeries: true,
        seriesName: undefined,
        opposite: false,
        reversed: false,
        logarithmic: false,
        logBase: 10,
        // categories: labl,
        categories: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],

        // min: 0,
        // max: 100,
        forceNiceScale: false,
        floating: false,
        decimalsInFloat: undefined,
        labels: {
          show: true,
          align: 'right',
          minWidth: 10,
          maxWidth: 400,
          hideOverlappingLabels: false,
          style: {
            colors: [],
            fontSize: '11px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 400,
            cssClass: 'apexcharts-yaxis-label',
          },
          offsetX: 10,
          offsetY: 5,
          rotate: 0,
          formatter: (value: any) => { return value + "%" },
        },
        axisBorder: {
          show: true,
          color: '#78909C',
          offsetX: 0,
          offsetY: 0
        },
        axisTicks: {
          show: true,
          borderType: 'solid',
          color: '#78909C',
          width: 6,
          offsetX: 0,
          offsetY: 0
        },
        title: {
          text: undefined,
          rotate: -90,
          offsetX: 0,
          offsetY: 0,
          style: {
            color: undefined,
            fontSize: '16px',
            fontFamily: 'Helvetica, Arial, sans-serif',
            fontWeight: 600,
            cssClass: 'apexcharts-yaxis-title',
          },
        },
        crosshairs: {
          show: true,
          position: 'back',
          stroke: {
            color: '#b6b6b6',
            width: 1,
            dashArray: 0,
          },
        },
        tooltip: {
          enabled: true,
          offsetX: 0,
        },

      },
      fill: {
        colors: ['#a7c88f', '#a7c88f', '#a7c88f', '#c7c7c7', '#c7c7c7'],

        opacity: 1,
        type: 'solid',
        gradient: {
          shade: 'light',
          type: "vertical",
          // shadeIntensity: 0,
          gradientToColors: '#66DA26',
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 0.3,
          // stops: [0, 50, 100],///////
          colorStops: []
        },
        image: {
          src: [],
          width: undefined,
          height: undefined
        },
        pattern: {
          style: 'verticalLines',
          // width: 6,
          // height: 6,
          // strokeWidth: 2,
        },
      },
      //   yaxis: {
      //   min: 6,
      //   max: 6,
      // },
      states: {
        hover: {
          filter: {
            type: 'none',
            value: 0,
          }
        },
      },
      xaxis: {
        // tickAmount:13,
        categories: xaxisCategories,
        labels: {

          style: {
            fontSize: '10px',
            fontFamily: 'Rubik',
          },
        },

      },
      legend: {
        show: false,
        showForSingleSeries: false,
        // showForNullSeries: true,
        // showForZeroSeries: true,
        position: 'top',
        horizontalAlign: 'center',
        floating: false,
        fontSize: '14px',
        fontFamily: 'Rubik',
        fontWeight: 500,
        formatter: undefined,
        inverseOrder: false,
        width: undefined,
        height: undefined,
        tooltipHoverFormatter: undefined,
        customLegendItems: ['Completed', 'Pending'],
        color: "#f0f0f0",
        offsetX: 10,
        offsetY: 6,
      }
    };
  }



}
