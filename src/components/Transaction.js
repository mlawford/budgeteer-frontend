import React from 'react'

const Transaction = (props) => {
  return (
    <div>
      <p>{props.transactionName}:
      ${props.transactionAmount}
      </p>
    </div>
  )
}

export default Transaction
