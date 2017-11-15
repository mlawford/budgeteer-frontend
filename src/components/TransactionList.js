import React from 'react'
import Transaction from './Transaction'




class TransactionList extends React.Component{

render() {
  const mappedTransactions = this.props.allTransactions.map((transaction,idx) => {
    return (<li><Transaction key={idx} transactionName={transaction.name} transactionAmount={transaction.amount} /></li>)
  })
  return (
    <div>
    <ol>
      {mappedTransactions}
      </ol>
    </div>
  )
}
}



export default TransactionList
