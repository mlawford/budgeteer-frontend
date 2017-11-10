import React, { Component } from 'react'
import CategoryBudget from './CategoryBudget'


export default class CategoryBudgetList extends Component {
  state = {}

  render() {
    console.log(this.props)
    const mappedCategoryBudgets = this.props.categoryBudgets.map((category,idx) => {
      return (<CategoryBudget key={idx} categoryName={category.categoryName} budgetTotal={category.budgetTotal} />)
    })
    return (
      <div>{mappedCategoryBudgets}</div>
    )
  }
}
