import React from 'react'
import ExpenseItem from '../ExpenseItem/ExpenseItem'

import './ExpensesList.css'

const ExpensesList = (props) => {
  const expenses = props.expenses

  const expensesMap = expenses.map((expense) => <ExpenseItem key={expense.id} title={expense.title} category={expense.category} amount={expense.amount} tax={expense.tax} date={expense.date} />)

  if (expenses.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>
  }

  return <ul className='expenses-list'>{expensesMap}</ul>
}

export default ExpensesList
