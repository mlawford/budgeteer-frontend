import React, { Component } from 'react'

export default class TransactionForm extends Component {
  state = {
    transactionFormName: "",
    transactionFormAmount: 0
  }

  mapCategories = () =>  {
    const mappedCategories = this.props.categoryBudgets.map(category => {
      return (<option key={category.id} id={category.id} value={category.id}>{category.category_name}</option>)
    })
    return mappedCategories
  }

  nameChange = (event) => {
    this.setState({
      transactionFormName: event.target.value
    })
  }

  amountChange = (event) => {
    this.setState({
      transactionFormAmount: event.target.value
    })
  }


    render() {

      return (
      <form onSubmit={this.props.handleTransaction}>
        <select>
          {this.mapCategories()}
        </select>
        <input onChange={this.nameChange} name="transactionFormName" value={this.state.transactionFormName} type="text"/>
        <input onChange={this.amountChange} name="transactionFormAmount" value={this.state.transactionFormAmount} type="number"/>
        <input type="submit"/>
      </form>
    )
  }
}
