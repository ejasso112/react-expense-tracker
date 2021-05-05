import React from 'react'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate = props.date
  const expenseTitle = props.title
  const expenseCategory = props.category
  const expenseAmount = props.amount
  const expenseTax = props.tax

  return (
    <div className='expenseItem'>
      <ExpenseDate expenseDate={expenseDate} />
      <div className='expenseItem__description'>
        <div className='expenseItem__heading'>
          <h2 className='expenseItem__title'>{expenseTitle}</h2>
          <p className='expenseItem__category'>{expenseCategory}</p>
        </div>
        <div className='expenseItem__body'>
          <div className='expenseItem__price'>-${expenseAmount}</div>
        </div>
      </div>
    </div>
  )
}

export default ExpenseItem
