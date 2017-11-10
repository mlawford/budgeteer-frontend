import React from 'react'

const CategoryBudget = (props) => {
  console.log(props)
  return (
    <div>
      <h3>{props.categoryName}</h3>
      <h4>{props.budgetTotal}</h4>
    </div>
  )
}

export default CategoryBudget
