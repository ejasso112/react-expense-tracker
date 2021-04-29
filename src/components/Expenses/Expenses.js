import React, { useState } from 'react'
import Card from '../Card/Card'
import ExpenseList from '../ExpensesList/ExpensesList'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'

import './Expenses.css'

const Expenses = (props) => {
  const expenses = props.expenses
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const filteredExpeneses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  return (
    <Card className='expenses'>
      <ExpensesFilter selected={filteredYear} onFilterChange={filterChangeHandler} />
      <ExpenseList expenses={filteredExpeneses} />
    </Card>
  )
}

export default Expenses
