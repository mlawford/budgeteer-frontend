import React, { Component } from 'react'
import MonthlyBudget from './MonthlyBudget'
import CategoryBudgetList from './CategoryBudgetList'
import MonthlyBudgetForm from './MonthlyBudgetForm'

export default class BudgetContainer extends Component {

  state = {
    monthlyBudgetAmount: 2500,
    categoryBudgets: [
      {categoryName: "booze", budgetTotal: 500}
    ],
    monthlyBudgetInput: 0
  }

  handleBudgetChange = (event) => {
    this.setState({
      monthlyBudgetInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let category1 = {category_name: event.target[1].value, category_budget_total: event.target[2].value,  monthly_budget_id: 1}
    let category2 = {category_name: event.target[3].value, category_budget_total: event.target[4].value,  monthly_budget_id: 1}
    let category3 = {category_name: event.target[5].value, category_budget_total: event.target[6].value, monthly_budget_id: 1}

    fetch("http://localhost:3000/api/monthly_budgets",{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({user_id:1, budget_total:this.state.monthlyBudgetInput})
    })
    .then(
      fetch("http://localhost:3000/api/category_budgets",{
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({
          category1Key: category1,
          category2Key: category2,
          category3Key: category3
        })
      })
    )
  }


  render() {
    return (
      <div>
        <MonthlyBudget {...this.state} />
        <p>{this.props.user.password} </p>
        <CategoryBudgetList {...this.state} />
        <MonthlyBudgetForm handleBudgetInput={this.handleBudgetChange} monthlyBudgetInput={this.state.monthlyBudgetInput} handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}
