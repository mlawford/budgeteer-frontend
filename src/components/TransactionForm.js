import React from 'react'

const TransactionForm = (props) => (

    <form onSubmit={props.handleTransaction}>
      <input type="text"/>
      <input type="number"/>
      <input type="submit"/>
    </form>

)

export default TransactionForm
