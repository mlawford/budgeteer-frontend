import React from 'react'

const MonthlyBudgetForm = (props) => (
  <form onSubmit={props.handleSubmit}>
    
    <input type="number" onChange={props.handleBudgetInput} value={props.monthlyBudgetInput} />
      <br/>
      <br/>
    <input type="text" />
    <input type="number" />
      <br/>
    <input type="text" />
    <input type="number" />
      <br/>
    <input type="text" />
    <input type="number" />
      <br/>
    <input type="submit"/>

  </form>
)

export default MonthlyBudgetForm
