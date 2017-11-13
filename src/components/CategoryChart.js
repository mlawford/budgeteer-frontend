import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';


export default class CategoryChart extends Component {
  state = {
    data: {
        labels: [],
        datasets: [{
          label: 'Language Profiency',
          fillColor: 'rgba(244,67,54,0.5)',
          borderColor: '#000',
          data: [4.5, 4, 4, 4, 3, 3, 2, 1.5],
        }]
      },
      options: {
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
    }
  }


  render() {
    return (
      <Doughnut data={this.state.data} />
    );
  }

}
