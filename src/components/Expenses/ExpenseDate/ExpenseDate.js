import React from 'react'

import './ExpenseDate.css'

const ExpenseDate = (props) => {
  const expenseMonth = props.expenseDate.toLocaleString('en-US', { month: 'long' })
  const expenseDay = props.expenseDate.toLocaleString('en-US', { day: '2-digit' })
  // const expenseYear = props.expenseDate.getFullYear()

  return (
    <div className='expenseDate'>
      <div className='expenseDate__day'>{expenseDay}</div>
      <div className='expenseDate__month'>{expenseMonth}</div>
    </div>
  )
}

export default ExpenseDate
