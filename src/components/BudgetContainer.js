import React, { Component } from 'react'
import MonthlyBudget from './MonthlyBudget'
import CategoryBudgetList from './CategoryBudgetList'

export default class BudgetContainer extends Component {

  state = {
    monthlyBudgetAmount: 2500,
    categoryBudgets: [
      {categoryName: "booze", budgetTotal: 500}
    ]
  }

  render() {

    return (
      <div>
        <MonthlyBudget {...this.state} />
        <p>{this.props.user.password} </p>
        <CategoryBudgetList {...this.state} />

      </div>
    )
  }
}
