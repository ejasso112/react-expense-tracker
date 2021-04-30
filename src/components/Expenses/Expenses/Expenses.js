import React, { useState } from 'react'
import Card from '../../UI/Card/Card'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import ExpensesChart from '../ExpensesChart/ExpensesChart'
import ExpensesList from '../ExpensesList/ExpensesList'

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
      <ExpensesChart expenses={filteredExpeneses} />
      <ExpensesList expenses={filteredExpeneses} />
    </Card>
  )
}

export default Expenses
