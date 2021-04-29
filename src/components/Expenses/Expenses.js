import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseItem from '../ExpenseItem/ExpenseItem'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const expensesMap = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear).map((expense) => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />)

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      {expensesMap}
    </Card>
  )
}

export default Expenses
