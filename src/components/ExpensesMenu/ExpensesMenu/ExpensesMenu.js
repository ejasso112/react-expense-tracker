import React from 'react'
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter'
import NewExpense from '../NewExpense/NewExpense/NewExpense'

import './ExpensesMenu.css'

const ExpensesMenu = (props) => {
  /* props = {
    onAddExpense - function,
    onFilterYear - function,
    filteredYear - string,
  }*/
  const onAddExpense = props.onAddExpense
  const onFilterYear = props.onFilterYear
  const filteredYear = props.filteredYear

  return (
    <div className='expensesMenu'>
      <ExpensesFilter onFilterYear={onFilterYear} filteredYear={filteredYear} />
      <NewExpense onAddExpense={onAddExpense} />
    </div>
  )
}
export default ExpensesMenu
