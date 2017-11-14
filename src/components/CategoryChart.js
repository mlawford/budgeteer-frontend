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

  componentWillReceiveProps(nextProps) {
    debugger
    this.createChartData(nextProps)
  }

  setChartData = (chartData) => {
    this.setState({
      data: {
        ...this.state.data,
        datasets: [{
          ...this.state.data.datasets[0],
          data: chartData
        }]
      }
    })
  }

  // [0, 10, 3, 4]


  createChartData = (props) => {
    let chartData = props.categoryBudgets.reduce((chartData, category) => {
      console.log(props.allTransactions);
      let total = props.allTransactions.reduce((acc, transaction) => {
        if(category.id === transaction.category_budget_id)
          acc += transaction.amount
        return acc
      }, 0)
      chartData.push(total)
      return chartData
    }, [])
    this.setChartData(chartData)
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
