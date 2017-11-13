import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';


export default class CategoryChart extends Component {
  state = {
    data: {
        labels: this.mapCategoryTitles(),
        datasets: [{
          label: 'Language Profiency',
          fillColor: 'rgba(244,67,54,0.5)',
          borderColor: '#000',
          data: this.mapCategoryAmounts(),
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

  mapCategoryTitles() {
    return this.props.categoryBudgets.map(category => category.category_name)
  }

  mapCategoryAmounts() {
    return this.props.categoryBudgets.map(category => category.category_budget_total)
  }


  render() {
    return (
      <Doughnut data={this.state.data} />
    );
  }

}
