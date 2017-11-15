import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import BudgetContainer from './components/BudgetContainer'
import MonthlyBudgetForm from './components/MonthlyBudgetForm'

class App extends Component {

  constructor() {
    super()
    this.state = {
      user: "",
      transactionsTotal: 0,
      hasBudget: true,
      monthlyBudgetInput: 0,
    }
  }

  createUser = (event) => {
    this.handleSubmit(event)
    this.setDemoUser()
    setTimeout(() => {
      this.setState({
        hasBudget: true
      })
    },500)

  }

  setDemoUser = () => {
    fetch("http://localhost:3000/api/users/1")
    .then((response) => response.json())
    .then((response) => this.setState({
      user: response
    }))
    console.log(this.state.user)
  }

  checkForOverBudget = (event) => {
    let categoryBudgetSum = parseInt(event.target[2].value) + parseInt(event.target[4].value) + parseInt(event.target[6].value)
    let monthlyBudgetSum = parseInt(event.target[0].value)
    return (categoryBudgetSum > monthlyBudgetSum) ? true : false
  }

  handleBudgetChange = (event) => {
    this.setState({
      monthlyBudgetInput: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    if (this.checkForOverBudget(event) === false) {
      let category1 = {category_name: event.target[1].value, category_budget_total: event.target[2].value, monthly_budget_id: 0 }
      let category2 = {category_name: event.target[3].value, category_budget_total: event.target[4].value, monthly_budget_id: 0 }
      let category3 = {category_name: event.target[5].value, category_budget_total: event.target[6].value, monthly_budget_id: 0 }


      fetch("http://localhost:3000/api/monthly_budgets",{
        headers:{
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({user_id:1, budget_total:this.state.monthlyBudgetInput})
      })
      .then(setTimeout(() => {
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
      }, 500)
    )
  }
}

routeCheck(){
    if (this.state.user === ""){
      return <Welcome setDemoUser = {this.setDemoUser} />
    }else if (this.state.hasBudget === false){
      return <MonthlyBudgetForm handleBudgetInput={this.handleBudgetChange} handleSubmit={this.createUser} checkForOverBudget={this.checkForOverBudget} />
    }else{
      return <BudgetContainer user={this.state.user}/>
    }
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        {this.routeCheck()}
      </div>
    
    )
  }
}
// {this.state.hasBudget === false && this.state.user === "" ? <Route exact path="/" render={() => <Welcome setDemoUser={this.setDemoUser} />}} /> :
// <Route exact path="/" render={() => <BudgetContainer/>}/>}
//

export default App;
