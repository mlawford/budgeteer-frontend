import React, { Component } from 'react'
import '../App.css';

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
      <form className='form'onSubmit={this.props.handleTransaction}>
      <label> Category </label>
        <select>
          {this.mapCategories()}
        </select><br/>
        <input onChange={this.nameChange} name="transactionFormName" placeholder="What did you buy?" value={this.state.transactionFormName} type="text"/><br/>
        <input onChange={this.amountChange} name="transactionFormAmount" value={this.state.transactionFormAmount}placeholder="How much did it cost?" type="number"/><br/>
        <input type="submit" value="Add Transaction"/><br/>
      </form>
    )
  }
}
