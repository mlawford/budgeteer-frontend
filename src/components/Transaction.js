import React from 'react'

const Transaction = (props) => {
  return (
    <div>
      <h3>{props.transactionTitle}</h3>
      <h4>{props.transactions}</h4>
    </div>
  )
}

export default Transaction
