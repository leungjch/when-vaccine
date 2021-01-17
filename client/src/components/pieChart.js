import React, { Component } from "react";
import Chart from "chart.js";


export default class DoughnutChart extends React.Component {
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
        type: 'doughnut',
        data: {
          labels: this.props.data.map(d => d.name),
          datasets: [{
            data: this.props.data.map(d => d.value),
            backgroundColor: [
              "rgba(42, 77, 105, 0.7)",
              "rgba(75, 134, 180, 0.7)",
              "rgba(173, 203, 227, 0.7)",
              "rgba(231, 239, 246, 0.7)",
              "rgba(99, 172, 229, 0.7)",
              "rgba(99, 172, 229, 0.7)"
            ]
          }],
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
}
