import React, { useState } from 'react'
import ExpenseFrom from '../ExpenseForm/ExpenseForm'

import './NewExpense.css'

const NewExpense = (props) => {
  /* props = {
    onAddExpense - function,
  }*/
  const onAddExpense = props.onAddExpense

  const [isFormToggled, setIsFromToggled] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }

    onAddExpense(expenseData)
  }

  const toggleContent = isFormToggled ? 'CANCEL' : 'ADD NEW EXPENESE'

  const newExpenseClickHandler = () => {
    setIsFromToggled((prevState) => !prevState)
  }

  return (
    <>
      <button className={`newExpense__button newExpense__button--primary`} onClick={newExpenseClickHandler}>
        {toggleContent}
      </button>
      <div className='newExpense__break'></div>
      {isFormToggled && <ExpenseFrom onCancelClick={newExpenseClickHandler} onSaveExpenseData={saveExpenseDataHandler} />}
    </>
  )
}

export default NewExpense
