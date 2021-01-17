import React, { Component } from "react";
import Chart from "chart.js";


export default class LineChart extends React.Component {
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
        type: 'bar',
        data: {
          labels: this.props.data.map(d => d.name),
          datasets: [{
            data: this.props.data.map(d => d.value),
            backgroundColor: this.props.data.map(d => d.color),
            label: "Person count"
          }],
          backgroundColor: this.props.data.map(d => d.color)
        }
      });
    }
  
    render() {
      return <canvas ref={this.chartRef} />;
    }
}
