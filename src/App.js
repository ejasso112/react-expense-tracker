import React, { useState } from 'react'
import Expenses from './components/Expenses/Expenses/Expenses'
import ExpensesChart from './components/ExpensesChart/ExpensesChart/ExpensesChart'
import ExpensesMenu from './components/ExpensesMenu/ExpensesMenu/ExpensesMenu'
// import NewExpense from './components/NewExpense/NewExpense/NewExpense'

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    category: 'Essential',
    amount: 94.12,
    tax: 6.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    category: 'Entertainment',
    amount: 799.49,
    tax: 51.97,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    category: 'Bill',
    amount: 294.67,
    tax: 19.15,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    category: 'Furniture',
    amount: 450,
    tax: 29.25,
    date: new Date(2021, 5, 12),
  },
]

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)
  const [filteredYear, setFilteredYear] = useState('2021')

  const filteredExpeneses = expenses.filter((expense) => expense.date.getFullYear().toString() === filteredYear)

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }

  const addExpenseHnadler = (expense) => {
    setExpenses((prevState) => [...prevState, expense])
    console.log(expenses)
  }

  return (
    <div className='container'>
      <ExpensesChart expenses={filteredExpeneses} />
      <ExpensesMenu onAddExpense={addExpenseHnadler} onFilterYear={filterChangeHandler} filteredYear={filteredYear} />
      <Expenses expenses={filteredExpeneses} />
    </div>
  )
}

export default App
