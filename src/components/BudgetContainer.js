import React, { Component } from 'react'
import UserContainer from './userContainer'

export default class BudgetContainer extends Component {

  state = {
    monthlyBudgetAmount: 0,
    categoryBudgets: []
  }

  fetchData(){
    fetch("http://localhost:3000/api/users")
    .then((response) => response.json())
    .then((response) => console.log(response))
  }

  componentDidMount(){

    this.fetchData()
  }

  render() {
    return (
      <div>
        <p>This is my budget</p>
        <UserContainer/>
      </div>
    )
  }
}
