import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';


export default class CategoryChart extends Component {
  state = {
    data: {
        labels: [],
        datasets: [
          {
            label: 'Language Profiency',
            backgroundColor: '#31CB9B',
            data: [this.props.monthlyBudgetAmount]
          },
          {
            label: 'Language Profiency',
            backgroundColor: 'yellow',
            data: [500]
          }
        ]
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
