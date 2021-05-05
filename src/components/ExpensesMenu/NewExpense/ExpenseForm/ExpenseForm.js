import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredCategory, setEnteredCategory] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const categoryChangeHandler = (event) => {
    setEnteredCategory(event.target.value)
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    props.onSaveExpenseData({
      title: enteredTitle,
      category: enteredCategory,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    })

    setEnteredTitle('')
    setEnteredCategory('')
    setEnteredAmount('')
    setEnteredDate('')
  }

  return (
    <form className='newExpense__form' onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>DATE:</label>
          <input className='newExpense__input' type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className='new-expense__control'>
          <label>TITLE:</label>
          <input className='newExpense__input' type='text' onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className='new-expense__control'>
          <label>AMOUNT:</label>
          <input className='newExpense__input' type='number' min='0.01' step='0.01' onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className='new-expense__control'>
          <label>CATEGORY:</label>
          <input className='newExpense__input' type='text' onChange={categoryChangeHandler} value={enteredCategory} />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button className='newExpense__button newExpense__button--secondary' type='submit'>
          Add Expense
        </button>
      </div>
    </form>
  )
}

export default ExpenseForm
