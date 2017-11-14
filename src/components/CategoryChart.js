import React, { Component } from 'react'
import {Doughnut} from 'react-chartjs-2';


export default class CategoryChart extends Component {
  state = {
    data: {
        labels: this.mapCategoryTitles(),
        datasets: [{
          label: 'Language Profiency',
          backgroundColor: ['#31CB9B','#98e6ce'],
          data: [],
          hoverBoderColor: 'black'
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

  componentDidMount() {
    this.createChartData()
  }

  createChartData = () => {
    let chartData = []
    let transactionArr = []
    fetch('http://localhost:3000/api/transactions')
    .then(res => res.json())
    .then(json => {
      transactionArr = json
    })
    .then(() => {
      this.props.categoryBudgets.forEach(category => {
        let acc = 0
        transactionArr.forEach(transaction => {
          if(category.id === transaction.category_budget_id) {
            acc += transaction.amount
          }
        })
        chartData.push(acc)
      })
      this.setState({
        data: {
          ...this.state.data,
          datasets: [{
            ...this.state.data.datasets[0],
            data: chartData
          }]
        }
      })
    })
  }


  // calculateCategory1Spent(){
  //   let percent = ((this.props.category1AmountLeft/this.state.categoryBudgets[0].category_budget_total)*100)
  //   return 100-percent
  // }

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
