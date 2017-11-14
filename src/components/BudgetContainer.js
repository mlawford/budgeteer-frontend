import React, { Component } from 'react'
import MonthlyBudgetForm from './MonthlyBudgetForm'
import TransactionForm from './TransactionForm'
import Transaction from './Transaction'
import CategoryChart from './CategoryChart'

export default class BudgetContainer extends Component {
  state = {
    data: {},
    monthlyBudgetAmount: this.props.user.monthly_budgets[0].budget_total,
    // The category budgets state should set to the right monthly budget's category budgets. Accomplish this with a serializer for monthly budget. UNFINISHED TENTATIVE FIX RIGHT NOW
    categoryBudgets: this.props.user.category_budgets,
    monthlyBudgetInput: 0,
    transactions: 0, // <-- SET THIS TO THE RESULT OF YOUR INITIAL FETCH FROM THE BACK END
    transactionTitle: "",
    hasBudget: false,
    monthlyAmountLeft: this.calculateAmountLeft(),
    toggle: true,
    category1AmountLeft: this.getTransactions(1),
    category2AmountLeft: this.getTransactions(2),
  }

 //  getTransactionsTotal(){
 //   fetch("http://localhost:3000/api/monthly_budgets/1")
 //   .then(response => response.json())
 //   .then(response => this.setState({
 //     data: response
 //   }))
 // }


 changeTransactions(){
   this.setState({
     transactions: this.state.monthlyBudgetAmount-this.state.monthlyAmountLeft
   })
 }

  calculateProgressBar(){
    let percent = ((this.state.transactions/this.state.monthlyBudgetAmount)*100)
    console.log("CALCULATED PERCENT FROM CALCULATEPROGRRESSBAR: ", percent);
    if(percent > 100){
      percent = 100
    }

    return percent
  }

  // componentWillMount(){
  //   this.getTransactionsTotal()
  // }

  componentDidMount() {
  //  let transactionAcc = 0
  //  console.log(this.state.data)
  //  this.state.data.transactions.forEach(transaction => transactionAcc +=  transaction.amount)
  //  console.log(transactionAcc)
    this.setState({
      hasBudget: this.determineHasBudget()
    })
  }

  calculateAmountLeft() {
    const monthly_budget_id = this.props.user.monthly_budgets[0].id
    let counter = 0
    fetch(`http://localhost:3000/api/monthly_budgets/${monthly_budget_id}`)
    .then(res => res.json())
    .then(json => this.addTransactions(json, counter))
  }


  addTransactions(json, counter) {
    json.transactions.forEach(transaction => {
      counter += transaction.amount
    })
    this.setState({
      monthlyAmountLeft: (parseInt(this.state.monthlyBudgetAmount) - counter)
    })
    this.setState({
      toggle: false
    })
     setTimeout(this.changeTransactions(),10000)
  }

  determineHasBudget = () => {
    if(this.props.user.monthly_budgets === []) {
      return false
    } else {
      return true
    }
  }


  handleTransaction = (event) => {
    event.preventDefault()

    this.setState({
      transactions: this.state.transactions + event.target[2].value,
      transactionTitle: event.target[1].value,
    })
    fetch("http://localhost:3000/api/transactions",{
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({name: event.target[1].value, amount:event.target[2].value, category_budget_id: event.target[0].value})
    })
    .then(this.setState({
      transactions: ((this.state.monthlyBudgetAmount-(parseInt(this.state.monthlyAmountLeft)-parseInt(event.target[2].value))))
  })
  )
  this.setState({
    transactions: parseInt(this.state.transactions) + parseInt(event.target[2].value)
  })
}

  handleBudgetChange = (event) => {
    this.setState({
      monthlyBudgetInput: event.target.value
    })
  }

  checkForOverBudget = (event) => {
    let categoryBudgetSum = parseInt(event.target[2].value) + parseInt(event.target[4].value) + parseInt(event.target[6].value)
    let monthlyBudgetSum = parseInt(event.target[0].value)
    return (categoryBudgetSum > monthlyBudgetSum) ? true : false
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
    this.setState({hasBudget: true})
  } else {
    console.log("OVERBUDGET")
  }
}


// For rendering category budget amounts left


getTransactions(id) {
  fetch(`http://localhost:3000/api/monthly_budgets/1`)
  .then(res => res.json())
  .then(json => this.mapTransactions(json, 0, id))
}

mapTransactions(json, counter, id){
  json.transactions.forEach(transaction => {
    if (transaction.category_budget_id === id)
    counter += transaction.amount
  })
  if (id === 1) {
    this.setState({
      category1AmountLeft: parseInt(this.state.categoryBudgets[0].category_budget_total) - counter
    })
  } else if (id === 2) {
    this.setState({
      category2AmountLeft: parseInt(this.state.categoryBudgets[1].category_budget_total) - counter
    })
  }
}


      // For calculating amount spent in each category for Chart


    createChartData = () => {
      let data = []
      let transactionArr = []
      fetch('http://localhost:3000/api/transactions')
      .then(res => res.json())
      .then(json => {
        transactionArr = json
      })
      .then(() => {
        this.state.categoryBudgets.forEach(category => {
          let acc = 0
          console.log(transactionArr)
          transactionArr.forEach(transaction => {
            console.log(transaction)
            if(category.id === transaction.category_budget_id) {
              acc += transaction.amount
            }
          })
          data.push(acc)
          console.log(acc)
        })
        console.log(data)
        return data

      })
    }


  render() {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];

    var d = new Date();

    return (

      <div>
      <div className="navbar">
        <a href="#home">Budgeteer</a>
      </div>

      <div className="logo"/>
      <h1 className="grey-header">Welcome Back! </h1>
      <h2 className="banner">{monthNames[d.getMonth()]} </h2>
      <div className="w3-light-grey w3-round">
         <div className="w3-container w3-green w3-round" style={{"width":`${this.calculateProgressBar()}%`}}>${this.state.transactions}</div>
       </div> ${this.state.monthlyBudgetAmount}
       <div className="progress-left"> ${this.state.monthlyBudgetAmount - this.state.transactions} </div>
        {
          this.state.hasBudget ?
          <div>

            <TransactionForm handleTransaction={this.handleTransaction} categoryBudgets={this.state.categoryBudgets}/>
            <Transaction {...this.state}/>
          </div>
          :
          <MonthlyBudgetForm handleBudgetInput={this.handleBudgetChange} monthlyBudgetInput={this.state.monthlyBudgetInput} handleSubmit={this.handleSubmit} />

      }

      </div>
    )
  }
}
