import React, { Component } from 'react'
import CategoryBudget from './CategoryBudget'


export default class CategoryBudgetList extends Component {
  state = {
  }


  render() {
    console.log(this.props)
    const mappedCategoryBudgets = this.props.categoryBudgets.map((category,idx) => {
      return (<CategoryBudget key={idx} categoryName={category.category_name} budgetTotal={category.category_budget_total} />)
    })
    return (
      <div>
        <div>{mappedCategoryBudgets}</div>
        <div> {this.props.category1AmountLeft} </div>
        <div> {this.props.category2AmountLeft} </div>
      </div>
    )
  }
}
