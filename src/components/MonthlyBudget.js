import React from 'react'
import Chart from 'chart.js'


const MonthlyBudget = (props) => {
   return (
     <div>
      <h1>{props.monthlyBudgetAmount}</h1>
      <h2>{props.monthlyAmountLeft}</h2>
     </div>
   )
}

export default MonthlyBudget
