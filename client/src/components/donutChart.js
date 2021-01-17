import React, {Component} from "react";
import Chart from "chart.js";


export default class  DonutChart extends React.Component {
    constructor(props) {
      super(props);
      this.chartRef = React.createRef();
    }
  
    componentDidUpdate() {
      this.myChart.data.labels = this.props.data.map(d => d.name);
      this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
      this.myChart.update();
    }
  
    componentDidMount() {
      this.myChart = new Chart(this.chartRef.current, {
        // options: {
        //   scales: {
        //     xAxes: [
        //       {
        //         type: 'time',
        //         time: {
        //           unit: 'week'
        //         }
        //       }
        //     ],
        //     yAxes: [
        //       {
        //         ticks: {
        //           min: 0
        //         }
        //       }
        //     ]
        //   }
        // },
        type: 'doughnut',

        data: {
          labels: this.props.data.map(d => d.time),
          datasets: [{
            label: this.props.title,
            data: this.props.data.map(d => d.value),
            fill: 'none',
            backgroundColor: this.props.color,
            pointRadius: 2,
            borderColor: this.props.color,
            borderWidth: 1,
            lineTension: 0
          }]
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
  }
