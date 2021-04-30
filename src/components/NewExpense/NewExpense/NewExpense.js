import React, { useState } from 'react'
import ExpenseFrom from '../ExpenseForm/ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
  const [isFormToggled, setIsFromToggled] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    props.onAddExpense(expenseData)
  }

  const newExpenseClickHandler = () => {
    setIsFromToggled((prevState) => !prevState)
  }

  let newExpenseContent = <button onClick={newExpenseClickHandler}>Add New Expense</button>
  if (isFormToggled === true) {
    newExpenseContent = <ExpenseFrom onCancelClick={newExpenseClickHandler} onSaveExpenseData={saveExpenseDataHandler} />
  }

  return <div className='new-expense'>{newExpenseContent}</div>
}

export default NewExpense
