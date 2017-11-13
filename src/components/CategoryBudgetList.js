import React, { Component } from 'react'
import CategoryBudget from './CategoryBudget'


export default class CategoryBudgetList extends Component {
  state = {
    category1AmountLeft: this.getTransactions(),
    toggle: true

  }

  getTransactions() {
    let counter = 0
    console.log("I'm here")
    fetch(`http://localhost:3000/api/monthly_budgets/1`)
    .then(res => res.json())
    .then(json => this.mapTransactions(json,counter))
  }

    mapTransactions(json,counter){
      json.transactions.forEach(transaction => {
        if(transaction.category_budget_id === 1){
          counter += transaction.amount
        }
      })
    this.setState({
      category1AmountLeft: parseInt(this.props.categoryBudgets[0].category_budget_total) - counter
    })
    this.setState({
      toggle: false
    })
  }

  render() {
    console.log(this.props)
    const mappedCategoryBudgets = this.props.categoryBudgets.map((category,idx) => {
      return (<CategoryBudget key={idx} categoryName={category.category_name} budgetTotal={category.category_budget_total} />)
    })
    return (
      <div>
      <div>{mappedCategoryBudgets}</div>
      <div> {this.state.category1AmountLeft} </div>


      </div>
    )
  }
}
