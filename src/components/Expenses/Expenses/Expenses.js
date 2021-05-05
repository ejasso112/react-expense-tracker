import React from 'react'
import Card from '../../UI/Card/Card'
import ExpensesList from '../ExpensesList/ExpensesList'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses

  return (
    <Card className='expenses'>
      <ExpensesList expenses={expenses} />
    </Card>
  )
}

export default Expenses
