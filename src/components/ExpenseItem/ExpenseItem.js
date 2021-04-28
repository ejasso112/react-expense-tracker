import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseDate from '../ExpenseDate/ExpenseDate'

import './ExpenseItem.css'

const ExpenseItem = (props) => {
  const expenseDate = props.date
  const expenseTitle = props.title
  const expenseAmount = props.amount

  const [title, setTitle] = useState(expenseTitle)

  const clickHandler = (e) => {
    setTitle('Updated')
    console.log(e.target)
  }

  return (
    <Card className='expense-item'>
      <ExpenseDate expenseDate={expenseDate} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  )
}

export default ExpenseItem
