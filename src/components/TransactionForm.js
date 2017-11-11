import React from 'react'

const TransactionForm = (props) => {
    const mappedCategories = props.categoryBudgets.map(category => {
      return (<option key={category.id} id={category.id} value={category.category_name}>{category.category_name}</option>)
    })
    return (
      <form onSubmit={props.handleTransaction}>
      <select>
        {mappedCategories}
      </select>
      <input type="text"/>
      <input type="number"/>
      <input type="submit"/>
    </form>
  )

}

export default TransactionForm
